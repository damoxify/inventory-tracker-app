from flask import Flask, make_response, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate

from models import db, Products, Customers, Reviews

app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///inventory.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)
db.init_app(app)


@app.route('/')
def home():
    return "<h1>Welcome to the Inventory Tracker Application</h1>"


if __name__=="__main__":
    app.run(port=5555)