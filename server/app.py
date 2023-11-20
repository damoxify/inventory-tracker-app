from flask import Flask, make_response, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from models import db, Product, Customer, Review

app = Flask(__name__)

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
        products_list = [product.to_dict() for product in Product.query.all()]
        return jsonify(products_list), 200
    
    elif request.method == 'POST':
        new_product = Product(
            product_name=request.form.get('product_name'),
            description=request.form.get('description'),
            price=request.form.get('price'),
            customer_id=request.form.get('customer_id')
        )
        
        db.session.add(new_product)
        db.session.commit()
        
        new_product_dict = new_product.to_dict()
        return jsonify(new_product_dict), 201


@app.route('/products/<int:id>', methods=['GET', 'PATCH', 'PUT', 'DELETE'])
def products_id(id):
    product = Product.query.get_or_404(id)

    if request.method == 'GET':
        product_dict = product.to_dict()
        return jsonify(product_dict), 200
    
    elif request.method in ['PATCH', 'PUT']:
        for attr in request.form:
            setattr(product, attr, request.form.get(attr))
        
        db.session.commit()
        product_dict = product.to_dict()
        return jsonify(product_dict), 200

    elif request.method == 'DELETE':
        db.session.delete(product)
        db.session.commit()

        response_body = {
            "deleted successfully": True,
            "message": "product deleted"
        }

        return jsonify(response_body), 200


@app.route('/customers', methods=['GET', 'POST'])
def customers():
    if request.method == 'GET':
        customers_list = [customer.to_dict() for customer in Customer.query.all()]
        return jsonify(customers_list), 200   

    elif request.method == 'POST':
        new_customer = Customer(
            customer_name=request.form.get("customer_name"),
            address=request.form.get("address"),
            join_date=request.form.get("join_date")
        )

        db.session.add(new_customer)
        db.session.commit()

        new_customer_dict = new_customer.to_dict()
        return jsonify(new_customer_dict), 201


@app.route('/customers/<int:id>')
def customers_id(id):
    customer = Customer.query.get_or_404(id)
    customer_dict = customer.to_dict()
    return jsonify(customer_dict), 200


@app.route('/reviews')
def reviews():
    reviews_list = [review.to_dict() for review in Review.query.all()]
    return jsonify(reviews_list), 200


@app.route('/reviews/<int:id>', methods=['GET', 'PATCH'])
def reviews_id(id):
    review = Review.query.get_or_404(id)

    if request.method == 'GET':
        review_dict = review.to_dict()
        return jsonify(review_dict), 200
    
    elif request.method == 'PATCH':
        for attr in request.form:
            setattr(review, attr, request.form.get(attr))
        
        db.session.commit()
        rev_dict = review.to_dict()
        return jsonify(rev_dict), 200


if __name__ == "__main__":
    app.run(port=5555)
