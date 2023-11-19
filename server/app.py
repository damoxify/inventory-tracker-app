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


@app.route('/products', methods=['GET', 'POST'])
def products():
    if request.method == 'GET':
        products = []
        for product in Products.query.all():
            product_dict = product.to_dict()
            products.append(product_dict)
        response = make_response(jsonify(products), 200)
        return response
    
    elif request.method == 'POST':

        new_product = Products(
            product_name=request.form.get('product_name'),
            description=request.form.get('description'),
            price=request.form.get('price'))
        
        db.session.add(new_product)
        db.session.commit()
        new_product_dict = new_product.to_dict()
        response = make_response(jsonify(new_product_dict), 201)
        return response

        

@app.route('/products/<int:id>', methods=['GET', 'PATCH', 'PUT', 'DELETE'])
def product_id(id):
    products = Products.query.get(id)

    if request.method == 'GET':
        product_dict = products.to_dict()
        response = make_response(jsonify(product_dict), 200)
        return response
    
    elif request.method == 'PATCH':
        for attr in request.form:
            setattr(products, attr, request.form.get(attr))
            db.session.add(products)
            db.session.commit()
            product_dict = products.to_dict()
            response = make_response(jsonify(product_dict, 201))
            return response

    elif request.method == 'PUT':
        for attr in request.form:
            setattr(products, attr, request.form.get(attr))
            db.session.add(products)
            db.session.commit()
            product_dict = products.to_dict()
            response = make_response(jsonify(product_dict, 201))
            return response

    elif request.method == 'DELETE':
        db.session.delete(products)
        db.session.commit()

        response_body = {
            "deleted successfully" : True,
            "message" : "product deleted"
        }

        response = make_response(jsonify(response_body), 200)
        return response


@app.route('/customers', methods=['GET','POST'])
def customers():
    if request.method == 'GET':

        customers = []
        for customer in Customers.query.all():
            customers.append(customer.to_dict())
        response = make_response(jsonify(customers), 200)
        return response   

    elif request.method == 'POST':

        new_customer = Customers(
            customer_name = request.form.get("customer_name"),
            address = request.form.get("address"),
            birthdate = request.form.get("birthdate")
        )

        db.session.add(new_customer)
        db.session.commit()

        new_customer_dict = new_customer.to_dict()
        response = make_response(jsonify(new_customer_dict), 201)
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

@app.route('/reviews/<int:id>', methods=['GET','PATCH'])
def reviews_id(id):
    reviews_id = Reviews.query.filter_by(id=id).first()

    if request.method == 'GET':
        review_dict = reviews_id.to_dict()
        response = make_response(review_dict, 200)
        return response
    
    elif request.method == 'PATCH':
        
        for attr in request.form:
            setattr(reviews_id, attr, request.form.get(attr))
            db.session.add(reviews_id)
            db.session.commit()

            rev_dict = reviews_id.to_dict()
        response = make_response(rev_dict, 200)
        return response


        



if __name__=="__main__":
    app.run(port=5555)