from flask import Flask, render_template ,request,redirect, url_for, jsonify
from model import db,Inquiry
import os
import psycopg2
from flask_cors import CORS

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///Lead_flow.db'

db.init_app(app)
app.app_context().push()


@app.get('/')
def index():
    return render_template('index.html')



@app.get('/api/getleads')
def getleads():
    leads = Inquiry.query.all()
    leadlist = []
    for lead in leads:
        leadlist.append({'id':lead.id,'name':lead.lead_name,'email':lead.email,'contact':lead.contact_no,'date':lead.date_of_event,'pax':lead.Pax,'food':lead.req_food,'source':lead.Sources,'status':lead.progress})
    return jsonify(leadlist),200

@app.post('/api/addlead')
def addlead():
    data = request.get_json()
    name = data.get('Name')
    email = data.get('Email')
    contact = data.get('ContactNumber')
    date = data.get('Date')
    pax = data.get('Pax')
    food = data.get('FoodType')
    source = data.get('Sources')
    status = data.get('status')

    if not name:
        return jsonify({'message':'name is required'}),400
    if not email:
        return jsonify({'message':'email is required'}),400
    if not contact:
        return jsonify({'message':'contact is required'}),400
    if not date:
        return jsonify({'message':'date is required'}),400
    if not pax:
        return jsonify({'message':'pax is required'}),400
    if not food:
        return jsonify({'message':'food is required'}),400
    if not source:
        return jsonify({'message':'source is required'}),400
    if not status:
        return jsonify({'message':'status is required'}),400
    


    lead = Inquiry(lead_name=name,email=email,contact_no=contact,date_of_event=date,Pax=pax,req_food=food,Sources=source,progress=status)
    db.session.add(lead)
    db.session.commit()
    return jsonify({'message':'success'}),200


@app.delete('/api/deletelead/<int:id>')
def deletelead(id):
    lead = Inquiry.query.get_or_404(id)
    db.session.delete(lead)
    db.session.commit()
    return jsonify({'message':'success'}),200


@app.put('/api/updateleadstatus/<int:id>')
def updateleadstatus(id):
    lead = Inquiry.query.get_or_404(id)
    data = request.get_json()
    lead.progress = data.get('status')
    db.session.commit()
    return jsonify({'message':'success'}),200







if __name__ == '__main__':
    app.run(debug=True)