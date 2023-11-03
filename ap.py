from flask import Flask, render_template ,request,redirect, url_for, jsonify
from model import *
import os
import psycopg2
from flask_cors import CORS

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)