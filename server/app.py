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


@app.route('/products')
def products():
    products = []
    for product in Products.query.all():
        product_dict = product.to_dict()
        products.append(product_dict)
    response = make_response(jsonify(products), 200)
    return response
        

@app.route('/products/<int:id>')
def product_id(id):
    product = Products.query.filter_by(id=id).first()
    product_dict = product.to_dict()
    response = make_response(jsonify(product_dict), 200)
    return response

@app.route('/customers')
def customers():
    customers = []
    for customer in Customers.query.all():
        customers.append(customer.to_dict())
    response = make_response(jsonify(customers), 200)
    return response   

@app.route('/customers/<int:id>')
def customer_id(id):
    customer_id = Customers.query.filter_by(id=id).first()
    customer_dict = customer_id.to_dict()
    response = make_response(jsonify(customer_dict), 200)
    return response

@app.route('/reviews')
def reviews():
    reviews = []
    for review in Reviews.query.all():
        reviews.append(review.to_dict())
    response = make_response(jsonify(reviews), 200)
    return response   


if __name__=="__main__":
    app.run(port=5555)