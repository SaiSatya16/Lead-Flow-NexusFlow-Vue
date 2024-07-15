from flask import Flask, render_template, request, redirect, url_for, jsonify
from model import db, User, Role, Inquiry
import os
from flask_cors import CORS
from config import DevelopmentConfig
from sec import datastore
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, RoleMixin, login_required
from flask_security import auth_required, roles_required, current_user
from werkzeug.security import check_password_hash, generate_password_hash
from flask_restful import marshal, fields
from api import *
from datetime import datetime, timedelta
from sqlalchemy import func

app = Flask(__name__)
app.config.from_object(DevelopmentConfig)
api.init_app(app)
app.security = Security(app, datastore)

db.init_app(app)
app.app_context().push()

@app.get('/')
def index():
    return render_template('index.html')

@app.post('/user-login')
def user_login():
    data = request.get_json()
    email = data.get('email')
    if not email:
        return jsonify({"message": "email not provided"}), 400

    user = datastore.find_user(email=email)

    if not user:
        return jsonify({"message": "User Not Found"}), 404
    
    if not user.active:
        return jsonify({"message": "User Not Activated"}), 400
    
    if check_password_hash(user.password, data.get("password")):
        return jsonify({"token": user.get_auth_token(), "email": user.email, "role": user.roles[0].name, "username": user.username, "id": user.id})
    else:
        return jsonify({"message": "Wrong Password"}), 400

user_fields = {
    "id": fields.Integer,
    "username": fields.String,
    "email": fields.String,
    "active": fields.Boolean,
}

@app.get('/users')
@auth_required("token")
@roles_required("Admin")
def all_users():
    users = User.query.all()
    if len(users) == 0:
        return jsonify({"message": "No User Found"}), 404
    return marshal(users, user_fields)

@app.get('/activate/manager/<int:id>')
@auth_required("token")
@roles_required("Admin")
def activate_customer(id):
    User.query.filter_by(id = id).update({'active':True})
    db.session.commit()
    return jsonify({"message":"Manager activated"})

@app.get('/deactivate/manager/<int:id>')
@auth_required("token")
@roles_required("Admin")
def deactivate_customer(id):
    User.query.filter_by(id = id).update({'active':False})
    db.session.commit()
    return jsonify({"message":"Manager deactivated"})

@app.route('/api/dashboard-data')
@auth_required("token")
@roles_required("Manager")
def dashboard_data():
    try:
        total_leads = Inquiry.query.count()
        
        today = datetime.utcnow().date()
        week_ago = today - timedelta(days=7)
        
        new_leads_last_week = Inquiry.query.filter(func.date(Inquiry.date_of_event) >= week_ago).count()
        lead_growth_rate = ((new_leads_last_week / total_leads) * 100) if total_leads > 0 else 0
        
        confirmed_leads = Inquiry.query.filter_by(progress='Confirmed').count()
        conversion_rate = (confirmed_leads / total_leads * 100) if total_leads > 0 else 0
        
        return jsonify({
            'totalLeads': total_leads,
            'leadGrowthRate': round(lead_growth_rate, 2),
            'conversionRate': round(conversion_rate, 2),
            'conversionRateChange': get_conversion_rate_change(),
            'leadTrendsData': get_lead_trends_data(),
            'topCompanyFields': get_top_company_fields(),
            'regionalDistribution': get_regional_distribution(),
            'engagementMetrics': get_engagement_metrics()
        })
    except Exception as e:
        app.logger.error(f"Error in dashboard_data: {e}")
        return jsonify({"error": str(e)}), 500

def get_conversion_rate_change():
    try:
        today = datetime.utcnow().date()
        week_ago = today - timedelta(days=7)
        two_weeks_ago = today - timedelta(days=14)

        current_week_conversion = db.session.query(
            func.count(Inquiry.id).filter(Inquiry.progress == 'Confirmed', 
                                          func.date(Inquiry.date_of_event) >= week_ago)
        ).scalar() / db.session.query(func.count(Inquiry.id).filter(func.date(Inquiry.date_of_event) >= week_ago)).scalar()

        previous_week_conversion = db.session.query(
            func.count(Inquiry.id).filter(Inquiry.progress == 'Confirmed', 
                                          func.date(Inquiry.date_of_event).between(two_weeks_ago, week_ago))
        ).scalar() / db.session.query(func.count(Inquiry.id).filter(func.date(Inquiry.date_of_event).between(two_weeks_ago, week_ago))).scalar()

        change = ((current_week_conversion - previous_week_conversion) / previous_week_conversion) * 100 if previous_week_conversion else 0
        return round(change, 2)
    except Exception as e:
        app.logger.error(f"Error in get_conversion_rate_change: {e}")
        return 0

def get_lead_trends_data():
    try:
        thirty_days_ago = datetime.utcnow().date() - timedelta(days=30)
        leads = db.session.query(
            func.date(Inquiry.date_of_event).label('date'),
            func.count(Inquiry.id).label('count')
        ).filter(func.date(Inquiry.date_of_event) >= thirty_days_ago)\
        .group_by(func.date(Inquiry.date_of_event))\
        .order_by(func.date(Inquiry.date_of_event)).all()
        
        # Ensure date is in datetime.date format
        lead_trends_data = []
        for lead in leads:
            if isinstance(lead.date, str):
                lead_date = datetime.strptime(lead.date, '%Y-%m-%d').date()
            else:
                lead_date = lead.date
            lead_trends_data.append({'date': lead_date.strftime('%Y-%m-%d'), 'value': lead.count})

        return lead_trends_data
    except Exception as e:
        app.logger.error(f"Error in get_lead_trends_data: {e}")
        return []

def get_top_company_fields():
    try:
        top_fields = db.session.query(
            Inquiry.Company_Name,
            func.count(Inquiry.id).label('count')
        ).group_by(Inquiry.Company_Name)\
        .order_by(func.count(Inquiry.id).desc())\
        .limit(5).all()
        
        return [{'field': field.Company_Name, 'value': field.count} for field in top_fields]
    except Exception as e:
        app.logger.error(f"Error in get_top_company_fields: {e}")
        return []

def get_regional_distribution():
    try:
        regions = db.session.query(
            Inquiry.Location_Area,
            func.count(Inquiry.id).label('count')
        ).group_by(Inquiry.Location_Area)\
        .order_by(func.count(Inquiry.id).desc()).all()
        
        return [{'region': region.Location_Area, 'value': region.count} for region in regions]
    except Exception as e:
        app.logger.error(f"Error in get_regional_distribution: {e}")
        return []

def get_engagement_metrics():
    try:
        total_inquiries = Inquiry.query.count()
        confirmed = Inquiry.query.filter_by(progress='Confirmed').count()
        in_progress = Inquiry.query.filter_by(progress='In Progress').count()
        
        return [
            {'metric': 'Confirmed Rate', 'value': round((confirmed / total_inquiries) * 100, 2) if total_inquiries else 0},
            {'metric': 'In Progress Rate', 'value': round((in_progress / total_inquiries) * 100, 2) if total_inquiries else 0},
            {'metric': 'New Inquiries', 'value': round((total_inquiries - confirmed - in_progress) / total_inquiries * 100, 2) if total_inquiries else 0}
        ]
    except Exception as e:
        app.logger.error(f"Error in get_engagement_metrics: {e}")
        return []

if __name__ == '__main__':
    app.run(debug=True)