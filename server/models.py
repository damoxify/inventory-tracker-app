from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.exc import AssertionError

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Product(db.Model, SerializerMixin):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String, unique=True)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))

    def to_dict(self):
        return {
            'id': self.id,
            'product_name': self.product_name,
            'description': self.description,
            'price': self.price,
            'customer_id': self.customer_id,
        }
    
    @validates('product_name')
    def validate_product_name(self, key, product_name):
        if not product_name:
            raise AssertionError('Product name cannot be empty')
        return product_name

class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'

    serialize_rules = ('-Customer.products.customer', '-Customer.reviews.customer')

    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String, unique=True)
    address = db.Column(db.String)
    join_date = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    products = db.relationship('Product', backref='customer')
    reviews = db.relationship('Review', backref='customer')

    def to_dict(self):
        return {
            'id': self.id,
            'customer_name': self.customer_name,
            'address': self.address,
            'join_date': self.join_date,
            'products': [product.to_dict() for product in self.products],
            'reviews': [review.to_dict() for review in self.reviews],
        }
    
    @validates('customer_name')
    def validate_customer_name(self, key, customer_name):
        if not customer_name:
            raise AssertionError('Customer name cannot be empty')
        return customer_name

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))

    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'customer_id': self.customer_id,
        }


