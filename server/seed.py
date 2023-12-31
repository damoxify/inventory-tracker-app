#!/usr/bin/env python3

from random import choice as rc, randint

from faker import Faker

from app import app
from models import db, Product, Customer, Review


product_data = [
   {"id": 1, "product_name": "TechGlow Smartwatch", "description": "Stay connected and active with our sleek and feature-packed smartwatch."},
    {"id": 2, "product_name": "EcoFresh Air Purifier", "description": "Breathe in pure air with our compact air purifier."},
    {"id": 3, "product_name": "GourmetBlend Coffee Maker", "description": "Elevate your mornings with the GourmetBlend Coffee Maker."},
    {"id": 4, "product_name": "SwiftSync Wireless Earbuds", "description": "Immerse yourself in music with SwiftSync."},
    {"id": 5, "product_name": "LuxLite Bedside Lamp", "description": "Create a cozy ambiance with LuxLite."},
    {"id": 6, "product_name": "EcoChic Reusable Water Bottle", "description": "Stay hydrated sustainably."},
    {"id": 7, "product_name": " XpressCharge Fast Wireless Charger", "description": "Charge up in no time with XpressCharge."},
    {"id": 8, "product_name": "WellnessBlend Essential Oil Diffuser", "description": "Transform your space with soothing aromas. "},
    {"id": 9, "product_name": "FlexFit Yoga Mat", "description": "Achieve balance and flexibility with FlexFit."},
    {"id": 10, "product_name": "CulinaryCraft Chef's Knife Set", "description": "Unleash your culinary skills with CulinaryCraft."},
    {"id": 11, "product_name": "CosmoGlo Night Sky Projector", "description": "Bring the stars indoors with CosmoGlo. "},
    {"id": 12, "product_name": "HydroSplash Waterproof Bluetooth Speaker", "description": "Dive into the music with HydroSplash."},
    {"id": 13, "product_name" : "EchoView Full HD Webcam", "description": "Upgrade your virtual meetings with EchoView. "},
    {"id": 14, "product_name" : "EcoFusion Bamboo Fiber Bed Sheets", "description": "Sleep in comfort with EcoFusion."},
    {"id": 15, "product_name" : "GloTunes Color-Changing Bluetooth Speaker", "description": "Light up your tunes with GloTunes."},
    {"id": 16, "product_name" : "PureStride Running Shoes", "description": "Hit the pavement in style and comfort with PureStride. "},
    {"id": 17, "product_name" : "FlexiDesk Adjustable Standing Desk", "description": "Find your ideal work posture with FlexiDesk."},


]


review_body = [
    "Amazing product! Quality is top-notch, and it's so user-friendly.",	
    "Sleek design, works like a charm. Definitely worth the purchase.",
    "Great value for money. Practical and efficient. Happy customer.",
	"Impressed with the durability and performance. Highly recommended!",
    "Decent product. Took a bit to figure out, but once I did, it worked well.",
    "Solid build quality. Simple yet effective. No complaints here.",
	"Handy gadget. Does what it promises. No regrets with this purchase.",
    "Average product. Does the job, but nothing extraordinary.",
    "Five stars! Can't believe I didn't buy it sooner. A must-have.",
    "OK product. Met expectations, but not a game-changer.",
    "Compact and convenient. Great for everyday use.",
    "Pleased with the performance. Good buy for the price.",
    "Not bad, not exceptional. Does what it's supposed to."
]


fake = Faker()

def inventory():

    Customer.query.delete()
    Product.query.delete()
    Review.query.delete()
    
 
    Customers = []
    for i in range(50):
        customer_details = Customer(customer_name=fake.name(), address=fake.address(), join_date=fake.date())
        Customers.append(customer_details)
    db.session.add_all(Customers)
    db.session.commit()
    
    Products = []    
    for product_properties in product_data:
            
        product_details = Product(product_name=product_properties["product_name"], description=product_properties["description"], price=f"${randint(5, 60)}", customer_id =rc(Customers).id)
        Products.append(product_details)
    db.session.add_all(Products)
    db.session.commit()
        

    Reviews = []
    for i in range(50):
        review_details = Review(
            body=rc(review_body),
            customer_id =rc(Customers).id,
            )
        Reviews.append(review_details)
    db.session.add_all(Reviews)
    db.session.commit()
        

if __name__ == '__main__':
    with app.app_context():
        inventory()

