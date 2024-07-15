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

if __name__ == '__main__':
    app.run(debug=True)