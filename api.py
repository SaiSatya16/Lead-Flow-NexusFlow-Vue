from flask_restful import Resource, Api, fields, marshal_with, reqparse
from model import *
from werkzeug.exceptions import HTTPException
from flask_cors import CORS
import json
from flask import make_response
from flask_security import auth_required, roles_required
import os
from functools import wraps
from flask import abort
from flask_security import roles_accepted
from flask import jsonify

api = Api()

def any_role_required(*roles):
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            if not roles_accepted(*roles):
                abort(403, description="Insufficient permissions")
            return fn(*args, **kwargs)
        return decorator
    return wrapper

#==========================Validation========================================================
class NotFoundError(HTTPException):
    def __init__(self,status_code):
        message = {"error_code":"BE1009","error_message":"Not Found"}
        self.response = make_response(json.dumps(message), status_code)

class BusinessValidationError(HTTPException):
    def __init__(self, status_code, error_code, error_message):
        message = {"error_code":error_code,"error_message":error_message}
        self.response = make_response(json.dumps(message), status_code)

#==============================output fields========================================

inquiry_fields = {
    "id": fields.Integer,
    "Company_Name": fields.String,
    "Organizer": fields.String,
    "Location_Area": fields.String,
    "date_of_event": fields.String,
    "Pax": fields.Integer,
    "req_food": fields.String,
    "email": fields.String,
    "contact_no": fields.String,
    "progress": fields.String
}

#====================Create Inquiry request pares=======================================

create_inquiry_parser = reqparse.RequestParser()
create_inquiry_parser.add_argument("Company_Name", type=str, required=True, help="Company Name is required")
create_inquiry_parser.add_argument("Organizer", type=str, required=True, help="Organizer is required")
create_inquiry_parser.add_argument("Location_Area", type=str, required=True, help="Location/Area is required")
create_inquiry_parser.add_argument("date_of_event", type=str, required=True, help="Date of Event is required")
create_inquiry_parser.add_argument("Pax", type=int, required=True, help="Pax is required")
create_inquiry_parser.add_argument("req_food", type=str, required=True, help="Food is required")
create_inquiry_parser.add_argument("email", type=str, required=True, help="Email is required")
create_inquiry_parser.add_argument("contact_no", type=str, required=True, help="Contact Number is required")
create_inquiry_parser.add_argument("progress", type=str, required=True, help="Progress is required")

#====================Update Inquiry request pares=======================================
update_inquiry_parser = reqparse.RequestParser()
update_inquiry_parser.add_argument("Company_Name", type=str)
update_inquiry_parser.add_argument("Organizer", type=str)
update_inquiry_parser.add_argument("Location_Area", type=str)
update_inquiry_parser.add_argument("date_of_event", type=str)
update_inquiry_parser.add_argument("Pax", type=int)
update_inquiry_parser.add_argument("req_food", type=str)
update_inquiry_parser.add_argument("email", type=str)
update_inquiry_parser.add_argument("contact_no", type=str)
update_inquiry_parser.add_argument("progress", type=str)


#=================================Inquiry api======================================================

class InquiryApi(Resource):
    @marshal_with(inquiry_fields)
    @auth_required("token")
    @any_role_required("Admin","Manager")
    def get(self):
        #get all inquiries
        inquiries = Inquiry.query.all()
        return inquiries

    @auth_required("token")
    @any_role_required("Admin","Manager")
    def delete(self,id):
        inquiry = Inquiry.query.get(id)
        if not inquiry:
            raise NotFoundError(404)
        db.session.delete(inquiry)
        db.session.commit()
        return {"message":"Inquiry Deleted"}

    @marshal_with(inquiry_fields)
    @auth_required("token")
    @any_role_required("Admin","Manager")
    def put(self,id):
        inquiry = Inquiry.query.get(id)
        if not inquiry:
            raise NotFoundError(404)
        data = update_inquiry_parser.parse_args()
        for key,value in data.items():
            if value:
                setattr(inquiry,key,value)
        db.session.commit()
        return inquiry
    
    @auth_required("token")
    @any_role_required("Admin","Manager")
    def post(self):
        data = create_inquiry_parser.parse_args()
        inquiry = Inquiry(**data)
        db.session.add(inquiry)
        db.session.commit()
        return {"message":"Inquiry Created"}
    
api.add_resource(InquiryApi,"/api/inquiry","/api/inquiry/<int:id>")

    
