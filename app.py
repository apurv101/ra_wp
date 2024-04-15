from flask import Flask, request, jsonify, render_template, send_file, send_from_directory, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from datetime import datetime, timezone
import pytz
import random
import os
import platform
from flask_cors import CORS
from dotenv import load_dotenv
import csv
import pandas as pd


from pathlib import Path
THIS_FOLDER = Path(__file__).parent.resolve()
load_dotenv(os.path.join(THIS_FOLDER, '.env'))

app = Flask(__name__)

CORS(app, resources={r"*": {"origins": "*"}})

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('SQLALCHEMY_DATABASE_URI')

db = SQLAlchemy(app)
migrate = Migrate(app, db)
import json
import os



### Randomization






random_orders = {}
for i in range(30):
    random_orders[i] = random.sample(range(i), i)
    random_orders[i] = random.sample(range(i), i)



number_of_reviews_per_page = 10
number_of_pages = 30//number_of_reviews_per_page






# all_review_read_data = {}
# top_review_read_data = {}
# products = ['product1', 'product2', 'product3', 'product4']
# for product in products:
#     with open(f'{THIS_FOLDER}/{product}/all_review_data.json', 'r') as file:
#         review_data = json.load(file)
#         all_review_read_data[product] = [0]*len(review_data)
#     with open(f'{THIS_FOLDER}/{product}/top_review_data.json', 'r') as file:
#         review_data = json.load(file)
#         top_review_read_data[product] = [0]*len(review_data)







# Define your models and database schema here
class Response(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    html_file_name = db.Column(db.String(80), nullable=False)
    comment_number = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return f'<Response {self.id}>'
    

class Action(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lab_id = db.Column(db.String(80), nullable=False)
    product = db.Column(db.String(80))
    action_name = db.Column(db.String(80))
    title = db.Column(db.String(80))
    price = db.Column(db.String(80))
    percentages = db.Column(db.String(80))
    overall_rating = db.Column(db.String(20))
    current_rating = db.Column(db.Integer)
    number_of_reviews=db.Column(db.String(80))
    review_id = db.Column(db.Integer)
    other_reviews = db.Column(db.String(80))
    created_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone('America/Denver')))


class Distribution(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lab_id = db.Column(db.String(80), nullable=False, unique=True)
    product_1_ar = db.Column(db.String(255), nullable=False)
    product_2_ar = db.Column(db.String(255), nullable=False)
    product_3_ar = db.Column(db.String(255), nullable=False)
    product_4_ar = db.Column(db.String(255), nullable=False)
    product_1_tr = db.Column(db.String(255), nullable=False)
    product_2_tr = db.Column(db.String(255), nullable=False)
    product_3_tr = db.Column(db.String(255), nullable=False)
    product_4_tr = db.Column(db.String(255), nullable=False)
    rating_scale_product_1_2 = db.Column(db.Boolean, default=True)
    rating_scale_product_3_4 = db.Column(db.Boolean, default=True)
    volume_product_1_2 = db.Column(db.Boolean, default=True)
    volume_product_3_4 = db.Column(db.Boolean, default=True)
    number_of_reviews_product_1 = db.Column(db.Integer)
    number_of_reviews_product_2 = db.Column(db.Integer)
    number_of_reviews_product_3 = db.Column(db.Integer)
    number_of_reviews_product_4 = db.Column(db.Integer)
    overall_rating_product_1 = db.Column(db.Numeric(10, 1))
    overall_rating_product_2 = db.Column(db.Numeric(10, 1))
    overall_rating_product_3 = db.Column(db.Numeric(10, 1))
    overall_rating_product_4 = db.Column(db.Numeric(10, 1))
    star_1_per_product_1 = db.Column(db.Integer)
    star_2_per_product_1 = db.Column(db.Integer)
    star_3_per_product_1 = db.Column(db.Integer)
    star_4_per_product_1 = db.Column(db.Integer)
    star_5_per_product_1 = db.Column(db.Integer)
    star_1_per_product_2 = db.Column(db.Integer)
    star_2_per_product_2 = db.Column(db.Integer)
    star_3_per_product_2 = db.Column(db.Integer)
    star_4_per_product_2 = db.Column(db.Integer)
    star_5_per_product_2 = db.Column(db.Integer)
    star_1_per_product_3 = db.Column(db.Integer)
    star_2_per_product_3 = db.Column(db.Integer)
    star_3_per_product_3 = db.Column(db.Integer)
    star_4_per_product_3 = db.Column(db.Integer)
    star_5_per_product_3 = db.Column(db.Integer)
    star_1_per_product_4 = db.Column(db.Integer)
    star_2_per_product_4 = db.Column(db.Integer)
    star_3_per_product_4 = db.Column(db.Integer)
    star_4_per_product_4 = db.Column(db.Integer)
    star_5_per_product_4 = db.Column(db.Integer)
    price_product_1 = db.Column(db.Numeric(10, 2))
    price_product_2 = db.Column(db.Numeric(10, 2))
    price_product_3 = db.Column(db.Numeric(10, 2))
    price_product_4 = db.Column(db.Numeric(10, 2))




high_dist = []
low_dist = []
with open(f'{THIS_FOLDER}/distn_high.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        high_dist.append(row)
with open(f'{THIS_FOLDER}/distn_low.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        low_dist.append(row)




def get_distributions(lab_id):
    ### Check if lab_id in distrubtion
    distribution_entry = Distribution.query.filter_by(lab_id=lab_id).first()
    if distribution_entry:
        return distribution_entry
    else:

        last_entry = Distribution.query.order_by(Distribution.id.desc()).first()
        if last_entry:
            dist_id = last_entry.id + 1
        else:
            dist_id = 0


        
        df = pd.read_csv(f'{THIS_FOLDER}/Attributes.csv')
        dist_id = dist_id%len(df)

        row = df.iloc[dist_id]


        # Assuming 'row' is your pandas DataFrame row
        price_product_1 = row['e1_pr']
        number_of_reviews_product_1 = row['e1_vol']
        star_1_per_product_1 = row['e1_s1']
        star_2_per_product_1 = row['e1_s2']
        star_3_per_product_1 = row['e1_s3']
        star_4_per_product_1 = row['e1_s4']
        star_5_per_product_1 = row['e1_s5']
        overall_rating_product_1 = row['e1_mean']

        price_product_2 = row['e2_pr']
        number_of_reviews_product_2 = row['e2_vol']
        star_1_per_product_2 = row['e2_s1']
        star_2_per_product_2 = row['e2_s2']
        star_3_per_product_2 = row['e2_s3']
        star_4_per_product_2 = row['e2_s4']
        star_5_per_product_2 = row['e2_s5']
        overall_rating_product_2 = row['e2_mean']

        price_product_3 = row['b1_pr']
        number_of_reviews_product_3 = row['b1_vol']
        star_1_per_product_3 = row['b1_s1']
        star_2_per_product_3 = row['b1_s2']
        star_3_per_product_3 = row['b1_s3']
        star_4_per_product_3 = row['b1_s4']
        star_5_per_product_3 = row['b1_s5']
        overall_rating_product_3 = row['b1_mean']

        price_product_4 = row['b2_pr']
        number_of_reviews_product_4 = row['b2_vol']
        star_1_per_product_4 = row['b2_s1']
        star_2_per_product_4 = row['b2_s2']
        star_3_per_product_4 = row['b2_s3']
        star_4_per_product_4 = row['b2_s4']
        star_5_per_product_4 = row['b2_s5']
        overall_rating_product_4 = row['b2_mean']



            
        # rating_scale_product_1_2 = random.choice([0, 1])
        # rating_scale_product_3_4 = random.choice([0, 1])
        # volume_product_1_2 = random.choice([0, 1])
        # volume_product_3_4 = random.choice([0, 1])

        # if rating_scale_product_1_2:
        #     dist_1 = random.choice(high_dist)
        #     _, star_1_per_product_1, star_2_per_product_1, star_3_per_product_1, star_4_per_product_1, star_5_per_product_1, overall_rating_product_1, _ = dist_1
        #     dist_2 = random.choice(high_dist)
        #     _, star_1_per_product_2, star_2_per_product_2, star_3_per_product_2, star_4_per_product_2, star_5_per_product_2, overall_rating_product_2, _ = dist_2
        # else:
        #     dist_1 = random.choice(low_dist)
        #     _, star_1_per_product_1, star_2_per_product_1, star_3_per_product_1, star_4_per_product_1, star_5_per_product_1, overall_rating_product_1, _ = dist_1
        #     dist_2 = random.choice(low_dist)
        #     _, star_1_per_product_2, star_2_per_product_2, star_3_per_product_2, star_4_per_product_2, star_5_per_product_2, overall_rating_product_2, _ = dist_2


        # if rating_scale_product_3_4:
        #     dist_1 = random.choice(high_dist)
        #     _, star_1_per_product_3, star_2_per_product_3, star_3_per_product_3, star_4_per_product_3, star_5_per_product_3, overall_rating_product_3, _ = dist_1
        #     dist_2 = random.choice(high_dist)
        #     _, star_1_per_product_4, star_2_per_product_4, star_3_per_product_4, star_4_per_product_4, star_5_per_product_4, overall_rating_product_4, _ = dist_2
        # else:
        #     dist_1 = random.choice(low_dist)
        #     _, star_1_per_product_3, star_2_per_product_3, star_3_per_product_3, star_4_per_product_3, star_5_per_product_3, overall_rating_product_3, _ = dist_1
        #     dist_2 = random.choice(low_dist)
        #     _, star_1_per_product_4, star_2_per_product_4, star_3_per_product_4, star_4_per_product_4, star_5_per_product_4, overall_rating_product_4, _ = dist_2

        
        star_1_per_product_1 = float(star_1_per_product_1) * 100
        star_2_per_product_1 = float(star_2_per_product_1) * 100
        star_3_per_product_1 = float(star_3_per_product_1) * 100
        star_4_per_product_1 = float(star_4_per_product_1) * 100
        star_5_per_product_1 = float(star_5_per_product_1) * 100
        star_1_per_product_2 = float(star_1_per_product_2) * 100
        star_2_per_product_2 = float(star_2_per_product_2) * 100
        star_3_per_product_2 = float(star_3_per_product_2) * 100
        star_4_per_product_2 = float(star_4_per_product_2) * 100
        star_5_per_product_2 = float(star_5_per_product_2) * 100
        star_1_per_product_3 = float(star_1_per_product_3) * 100
        star_2_per_product_3 = float(star_2_per_product_3) * 100
        star_3_per_product_3 = float(star_3_per_product_3) * 100
        star_4_per_product_3 = float(star_4_per_product_3) * 100
        star_5_per_product_3 = float(star_5_per_product_3) * 100
        star_1_per_product_4 = float(star_1_per_product_4) * 100
        star_2_per_product_4 = float(star_2_per_product_4) * 100
        star_3_per_product_4 = float(star_3_per_product_4) * 100
        star_4_per_product_4 = float(star_4_per_product_4) * 100
        star_5_per_product_4 = float(star_5_per_product_4) * 100



        # if volume_product_1_2:
        #     number_of_reviews_product_1 = random.randint(60000,66000)
        #     number_of_reviews_product_2 = random.randint(60000,66000)
        # else:
        #     number_of_reviews_product_1 = random.randint(3000,3300)
        #     number_of_reviews_product_2 = random.randint(3000,3300)

        # if volume_product_3_4:
        #     number_of_reviews_product_3 = random.randint(60000,66000)
        #     number_of_reviews_product_4 = random.randint(60000,66000)
        # else:
        #     number_of_reviews_product_3 = random.randint(3000,3300)
        #     number_of_reviews_product_4 = random.randint(3000,3300)

        # price_product_1 = random.choice([25.99, 26.99, 27.99])
        # price_product_2 = random.choice([25.99, 26.99, 27.99])

        # price_product_3 = random.choice([15.99, 16.99, 17.99])
        # price_product_4 = random.choice([15.99, 16.99, 17.99])


        products = ['product1', 'product2', 'product3', 'product4']
        for product in products:
            with open(f'{THIS_FOLDER}/{product}/all_review_data.json', 'r') as file:
                review_data = json.load(file)
                if product == 'product1':
                    product_1_ar = '0'*len(review_data)
                if product == 'product2':
                    product_2_ar = '0'*len(review_data)
                if product == 'product3':
                    product_3_ar = '0'*len(review_data)
                if product == 'product4':
                    product_4_ar = '0'*len(review_data)
                
            with open(f'{THIS_FOLDER}/{product}/top_review_data.json', 'r') as file:
                review_data = json.load(file)
                if product == 'product1':
                    product_1_tr = '0'*len(review_data)
                if product == 'product2':
                    product_2_tr = '0'*len(review_data)
                if product == 'product3':
                    product_3_tr = '0'*len(review_data)
                if product == 'product4':
                    product_4_tr = '0'*len(review_data)

        new_entry = Distribution(
            lab_id=lab_id,
            product_1_ar=product_1_ar,
            product_2_ar=product_2_ar,
            product_3_ar=product_3_ar,
            product_4_ar=product_4_ar,
            product_1_tr=product_1_tr,
            product_2_tr=product_2_tr,
            product_3_tr=product_3_tr,
            product_4_tr=product_4_tr,
            # rating_scale_product_1_2=rating_scale_product_1_2,
            # rating_scale_product_3_4=rating_scale_product_3_4,
            # volume_product_1_2=volume_product_1_2,
            # volume_product_3_4=volume_product_3_4,
            number_of_reviews_product_1=number_of_reviews_product_1,
            number_of_reviews_product_2=number_of_reviews_product_2,
            number_of_reviews_product_3=number_of_reviews_product_3,
            number_of_reviews_product_4=number_of_reviews_product_4,
            overall_rating_product_1=overall_rating_product_1,
            overall_rating_product_2=overall_rating_product_2,
            overall_rating_product_3=overall_rating_product_3,
            overall_rating_product_4=overall_rating_product_4,
            star_1_per_product_1=star_1_per_product_1,
            star_2_per_product_1=star_2_per_product_1,
            star_3_per_product_1=star_3_per_product_1,
            star_4_per_product_1=star_4_per_product_1,
            star_5_per_product_1=star_5_per_product_1,
            star_1_per_product_2=star_1_per_product_2,
            star_2_per_product_2=star_2_per_product_2,
            star_3_per_product_2=star_3_per_product_2,
            star_4_per_product_2=star_4_per_product_2,
            star_5_per_product_2=star_5_per_product_2,
            star_1_per_product_3=star_1_per_product_3,
            star_2_per_product_3=star_2_per_product_3,
            star_3_per_product_3=star_3_per_product_3,
            star_4_per_product_3=star_4_per_product_3,
            star_5_per_product_3=star_5_per_product_3,
            star_1_per_product_4=star_1_per_product_4,
            star_2_per_product_4=star_2_per_product_4,
            star_3_per_product_4=star_3_per_product_4,
            star_4_per_product_4=star_4_per_product_4,
            star_5_per_product_4=star_5_per_product_4,
            price_product_1=price_product_1,
            price_product_2=price_product_2,
            price_product_3=price_product_3,
            price_product_4=price_product_4
        )
        
        db.session.add(new_entry)
        db.session.commit()
        
        return new_entry
    



    
@app.route('/actions')
def show_actions():
    # Assuming you have a function to query Action objects from the database

    lab_id = request.args.get('id')
    if lab_id is None:
        actions = Action.query.all()
        return render_template('actions.html', actions=actions)
    else:
        actions = Action.query.filter_by(lab_id=lab_id).all()
        return render_template('actions.html', actions=actions)



    
    

@app.route('/add_response', methods=['POST'])
def add_response():
    # data = request.json
    # html_file_name = data.get('html_file_name')
    # comment_number = data.get('comment_number')
    # user_id = data.get('user_id')

    html_file_name = request.form.get('html_file_name')
    comment_number = request.form.get('comment_number')
    user_id = request.form.get('user_id')

    if html_file_name is None or comment_number is None or user_id is None:
        return jsonify({'error': 'Missing data'}), 400

    try:
        new_response = Response(html_file_name=html_file_name, comment_number=comment_number, user_id=user_id)
        db.session.add(new_response)
        db.session.commit()
        return jsonify({'message': 'Response added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

def get_all_info(current_product, lab_id):
    print(current_product)

    distribution_data = get_distributions(lab_id)
    print(distribution_data.price_product_1)
    print("!"*100)

    if current_product == "product1":
        product_data = {
            "title": "Bluetooth Headphones True Wireless Earbuds 60H Playback LED Power Display Earphones with Wireless Charging Case IPX5 Waterproof in-Ear Earbuds with Mic for TV Smart Phone Laptop Computer Sports",
            "price": str(distribution_data.price_product_1),
            "company": "TAGRY",
            "primary_image": "https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX679_.jpg",
            "thumbnails":[],
            "color_images": { 'initial': [{"hiRes":"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY355_.jpg":[355,316],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY450_.jpg":[450,401],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX425_.jpg":[477,425],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX466_.jpg":[523,466],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX522_.jpg":[586,522],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX569_.jpg":[639,569],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX679_.jpg":[762,679]},"variant":"MAIN","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX679_.jpg":[679,679]},"variant":"PT01","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX679_.jpg":[679,679]},"variant":"PT02","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX679_.jpg":[679,679]},"variant":"PT03","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX679_.jpg":[679,679]},"variant":"PT04","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX679_.jpg":[679,679]},"variant":"PT05","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX679_.jpg":[679,679]},"variant":"PT06","lowRes":None,"shoppableScene":None}]},
            "number_of_reviews": str(distribution_data.number_of_reviews_product_1),
            "overall_rating": str(distribution_data.overall_rating_product_1),
            "percentages": [distribution_data.star_1_per_product_1, distribution_data.star_2_per_product_1, distribution_data.star_3_per_product_1, distribution_data.star_4_per_product_1, distribution_data.star_5_per_product_1],
            "attributes":[["Brand","TAGRY"],["Model Name","X08"],["Color", "Black"],["Form Factor","In Ear"],["Connectivity Technology", "Wireless"]],
            "about": [
                "LED Power Display and 60H Playback: Dual digital LED power display outside of the case is to show the power level for charging case and earbuds. When charging for the case, the LED light will start to flash from 1 to 100. When you put earbuds into the case, then earbuds will start to be charged. 470mAh battery capacity charging case can provide extra 4 times full charging for both earbuds, each earbud can last 6H on single charging. So, you can enjoy 60H music time in total via using in turn.",
                "Wireless Charging and IPX5 Waterproof: The charging case of these bluetooth earbuds support wireless charging and USB C cable charging. These wireless headphones are rating at IPX5 waterproof, the nano-coating on earbuds surface can prevent water and sweat from penetrating, which can use as sport wireless headsets. You can listen to the music while running, working, reading, sleeping, meeting, etc.",
                "One-Step Pairing and Easy Touch Control: TAGRY X08 bluetooth earphones adopts hall switch. After first connection, these wireless earphones will connect with your device once you open the charging case, which is faster and more convenient. During using, you can touch either earbud to control the phone, such as the music switch, volume adjustment, phone calls, voice assistant, etc. No need to adjust through your mobile phones.",
                "Ergonomic Design and Lightweight: TAGRY X08 headphones' structure is the study of thousands of people's ear canal before design. Comes with three different sizes of ear tips, our X08 are fit for most people's ear cannals. These wireless bluetooth headphones are small and light, single earbud is only 0.14oz, earbud size is 1.57*0.78*0.59in, charging case size is 2.56*2.16*1in, It’s more convenient to carry.",
                "Superior Clear Call and Immersive Stereo Sound: These music earphones with 13mm speakers and triple-layer composite diaphragms provide powerful bass, stunning treble and clear mids. These earbuds are designed for sound and music lovers. It can support the mono mode and twin stereo mode, you can share the earbuds with your friends and families. Each earbud has a build-in microphone for phone calls. CVC noise reduction can make others hear your voice very clearly while phone calls."
            ],
            "review_read_data_all": [int(a) for a in distribution_data.product_1_ar],
            "review_read_data_top": [int(a) for a in distribution_data.product_1_tr]
        }
    elif current_product == "product2":
        product_data = {
            "title": "Wireless Earbuds Bluetooth Headphones, 40H Playtime Stereo IPX5 Waterproof Ear Buds, LED Power Display Cordless in-Ear Earphones with Microphone for iOS Andriod Cell Phone Sports",
            "price": str(distribution_data.price_product_2),
            "company": "YAQ",
            "primary_image": "https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX679_.jpg",
            "thumbnails":[],
            "color_images": { 'initial': [{"hiRes":"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41LTRytAadL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41LTRytAadL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SX679_.jpg":[849,679]},"variant":"MAIN","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/51TDaI52QxL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/51TDaI52QxL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SX679_.jpg":[849,679]},"variant":"PT01","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41gUEZUK+9L._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41gUEZUK+9L._AC_.jpg","main":{"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SX679_.jpg":[849,679]},"variant":"PT02","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41IaL4UTtcL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41IaL4UTtcL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SX679_.jpg":[849,679]},"variant":"PT03","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41uiGleFjuL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41uiGleFjuL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SX679_.jpg":[849,679]},"variant":"PT04","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41teSwpz8AL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41teSwpz8AL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SX679_.jpg":[849,679]},"variant":"PT05","lowRes":None,"shoppableScene":None}]},
            "number_of_reviews": str(distribution_data.number_of_reviews_product_2),
            "overall_rating": str(distribution_data.overall_rating_product_2),
            "percentages": [distribution_data.star_1_per_product_2, distribution_data.star_2_per_product_2, distribution_data.star_3_per_product_2, distribution_data.star_4_per_product_2, distribution_data.star_5_per_product_2],
            "attributes":[["Brand","YAQ"],["Model Name","T12 Wireless Bluetooth Earbuds"],["Color", "Black"],["Form Factor","In Ear"],["Connectivity Technology", "Wireless"]],
            "about": [
                ">>> Long Battery Life Bluetooth Earbuds: T12 Bluetooth earphones provide 6-8 hours of continuous use per charge. The 500mAh rechargeable charging case extends the usage time to 40 hours by providing 5 additional charges. Built-in dual LED power display keeps tracking the case’s remaining power and earbuds’ charging status in real-time.",
                ">>> Easy Pairing Bluetooth 5.3 Wireless Earphones: Latest Bluetooth version 5.3 has more stable transmission, lower power consumption and longer range with fewer dropouts than Bluetooth 5.1. Once paired for the first time, the two wireless earbuds will automatically connect to your device when you simply take them out of the charging case.",
                ">>> Crystal Clear Calls Wireless Ear Buds: 13mm chamber speaker driver unit provides stereo sound with deep bass and clear treble for an immersive sound experience. Large chamber acoustic design well balances the internal and external air pressure to avoid sound loss, ensuring you could be heard clearly even in noisy environment.",
                ">>> Smart Touch Control Bluetooth Earphones: Equipped with sensitive touch control panels on the left and right earbuds, you can flexibly control music playback, answer or reject calls, adjust volume, switch music and activate voice assistant, etc.",
                ">>> IPX5 Waterproof Bluetooth Headphones: The wireless headphones use IPX5 nano-coating technology to seal the surface of both earbuds to prevent sweat or rain from penetrating, allows you to use the in-ear earphones in any weather and workout situation. The earphones supports Bluetooth for iOS/Android/Windows smart devices.",
                ">>> Ergonomic Design Earphones: Precise calculations and many experiments were combined to design the shape of the headset. The perfect curvature and compact body weighing only 4 grams provides the ultimate in comfort by distributing the pressure in the ear canal while maintaining stability. And with 3 sizes of ear cups available, there's always one that suits you best!"
            ],
            "review_read_data_all": [int(a) for a in distribution_data.product_2_ar],
            "review_read_data_top": [int(a) for a in distribution_data.product_2_tr]
        }
    elif current_product == "product3":
        product_data = {
            "title": "by Ann Napolitano",
            "price": str(distribution_data.price_product_3),
            "company": "Hello Beautiful (Oprah's Book Club): A Novel",
            "primary_image": "https://m.media-amazon.com/images/I/91R1x+Q+YRL._SY522_.jpg",
            "thumbnails":[],
            "color_images": { 'initial': [{"hiRes":"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY355_.jpg":[355,316],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY450_.jpg":[450,401],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX425_.jpg":[477,425],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX466_.jpg":[523,466],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX522_.jpg":[586,522],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX569_.jpg":[639,569],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX679_.jpg":[762,679]},"variant":"MAIN","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX679_.jpg":[679,679]},"variant":"PT01","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX679_.jpg":[679,679]},"variant":"PT02","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX679_.jpg":[679,679]},"variant":"PT03","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX679_.jpg":[679,679]},"variant":"PT04","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX679_.jpg":[679,679]},"variant":"PT05","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX679_.jpg":[679,679]},"variant":"PT06","lowRes":None,"shoppableScene":None}]},
            "number_of_reviews": str(distribution_data.number_of_reviews_product_3),
            "overall_rating": str(distribution_data.overall_rating_product_3),
            "percentages": [distribution_data.star_1_per_product_3, distribution_data.star_2_per_product_3, distribution_data.star_3_per_product_3, distribution_data.star_4_per_product_3, distribution_data.star_5_per_product_3],
            "attributes":[],
            "about": [
                "NEW YORK TIMES BESTSELLER • OPRAH’S BOOK CLUB PICK • MORE THAN ONE MILLION COPIES SOLD! From the author of Dear Edward comes a “powerfully affecting” (People) family story that asks: Can love make a broken person whole?",
                '“Another tender tearjerker . . . Napolitano chronicles life’s highs and lows with aching precision.”—The Washington Post',
                "ONE OF THE CHICAGO PUBLIC LIBRARY’S TEN BEST BOOKS OF THE YEAR ",
                "A BEST BOOK OF THE YEAR: The New York Times Book Review, NPR, The Washington Post, Time, Vogue, Glamour, Harper’s Bazaar, New York Post, She Reads, Bookreporter",
                """
                William Waters grew up in a house silenced by tragedy, where his parents could hardly bear to look at him, much less love him—so when he meets the spirited and ambitious Julia Padavano in his freshman year of college, it’s as if the world has lit up around him. With Julia comes her family, as she and her three sisters are inseparable: Sylvie, the family’s dreamer, is happiest with her nose in a book; Cecelia is a free-spirited artist; and Emeline patiently takes care of them all. With the Padavanos, William experiences a newfound contentment; every moment in their house is filled with loving chaos.

    But then darkness from William’s past surfaces, jeopardizing not only Julia’s carefully orchestrated plans for their future, but the sisters’ unshakeable devotion to one another. The result is a catastrophic family rift that changes their lives for generations. Will the loyalty that once rooted them be strong enough to draw them back together when it matters most?

    An exquisite homage to Louisa May Alcott’s timeless classic, Little Women, Hello Beautiful is a profoundly moving portrait of what is possible when we choose to love someone not in spite of who they are, but because of it.
                """
                ],
            "review_read_data_all": [int(a) for a in distribution_data.product_3_ar],
            "review_read_data_top": [int(a) for a in distribution_data.product_3_tr],
            "title2": "Paperback - Large Print"
        }
    elif current_product == "product4":
        product_data = {
            "title": "by James McBride",
            "price": str(distribution_data.price_product_4),
            "company": "The Heaven & Earth Grocery Store (Oprah's Book Club): A Novel",
            "primary_image": "https://m.media-amazon.com/images/I/81DjECnYLJL._SY522_.jpg",
            "thumbnails":[],
            "color_images": { 'initial': [{"hiRes":"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY355_.jpg":[355,316],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY450_.jpg":[450,401],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX425_.jpg":[477,425],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX466_.jpg":[523,466],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX522_.jpg":[586,522],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX569_.jpg":[639,569],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX679_.jpg":[762,679]},"variant":"MAIN","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX679_.jpg":[679,679]},"variant":"PT01","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX679_.jpg":[679,679]},"variant":"PT02","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX679_.jpg":[679,679]},"variant":"PT03","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX679_.jpg":[679,679]},"variant":"PT04","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX679_.jpg":[679,679]},"variant":"PT05","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX679_.jpg":[679,679]},"variant":"PT06","lowRes":None,"shoppableScene":None}]},
            "number_of_reviews": str(distribution_data.number_of_reviews_product_4),
            "overall_rating": str(distribution_data.overall_rating_product_4),
            "percentages": [distribution_data.star_1_per_product_4, distribution_data.star_2_per_product_4, distribution_data.star_3_per_product_4, distribution_data.star_4_per_product_4, distribution_data.star_5_per_product_4],
            "attributes":[],
            "about": [
                "From James McBride, author of the bestselling Oprah’s Book Club pick Deacon King Kong and the National Book Award–winning The Good Lord Bird, a novel about small-town secrets and the people who keep them",
                "In 1972, when workers in Pottstown, Pennsylvania, were digging the foundations for a new development, the last thing they expected to find was a skeleton at the bottom of a well. Who the skeleton was and how it got there were two of the long-held secrets kept by the residents of Chicken Hill, the dilapidated neighborhood where immigrant Jews and African Americans lived side by side and shared ambitions and sorrows. Chicken Hill was where Moshe and Chona Ludlow lived when Moshe integrated his theater and where Chona ran the Heaven & Earth Grocery Store. When the state came looking for a deaf boy to institutionalize him, it was Chona and Nate Timblin, the Black janitor at Moshe’s theater and the unofficial leader of the Black community on Chicken Hill, who worked together to keep the boy safe.",
                "As these characters’ stories overlap and deepen, it becomes clear how much the people who live on the margins of white, Christian America struggle and what they must do to survive. When the truth is finally revealed about what happened on Chicken Hill and the part the town’s white establishment played in it, McBride shows us that even in dark times, it is love and community—heaven and earth—that sustain us.",
                "Bringing his masterly storytelling skills and his deep faith in humanity to The Heaven & Earth Grocery Store, James McBride has written a novel as compassionate as Deacon King Kong and as inventive as The Good Lord Bird."
                        ],
            "review_read_data_all": [int(a) for a in distribution_data.product_4_ar],
            "review_read_data_top": [int(a) for a in distribution_data.product_4_tr],
            "title2": "Paperback - Large Print"
        }
    else:
        product_data = {
            "title": "Bluetooth Headphones True Wireless Earbuds 60H Playback LED Power Display Earphones with Wireless Charging Case IPX5 Waterproof in-Ear Earbuds with Mic for TV Smart Phone Laptop Computer Sports",
            "price": str(distribution_data.price_product_4),
            "company": "Product1",
            "primary_image": "https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX679_.jpg",
            "thumbnails":[],
            "color_images": { 'initial': [{"hiRes":"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY355_.jpg":[355,316],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY450_.jpg":[450,401],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX425_.jpg":[477,425],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX466_.jpg":[523,466],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX522_.jpg":[586,522],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX569_.jpg":[639,569],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX679_.jpg":[762,679]},"variant":"MAIN","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX679_.jpg":[679,679]},"variant":"PT01","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX679_.jpg":[679,679]},"variant":"PT02","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX679_.jpg":[679,679]},"variant":"PT03","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX679_.jpg":[679,679]},"variant":"PT04","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX679_.jpg":[679,679]},"variant":"PT05","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX679_.jpg":[679,679]},"variant":"PT06","lowRes":None,"shoppableScene":None}]},
            "number_of_reviews": "6,834",
            "overall_rating": "3.9",
            "percentages": [76, 9, 10, 17, 24],
            "attributes":[["Brand","TAGRY"],["Model Name","X08"],["Color", "Black"],["Form Factor","In Ear"],["Connectivity Technology", "Wireless"]],
            "about": [
                "LED Power Display and 60H Playback: Dual digital LED power display outside of the case is to show the power level for charging case and earbuds. When charging for the case, the LED light will start to flash from 1 to 100. When you put earbuds into the case, then earbuds will start to be charged. 470mAh battery capacity charging case can provide extra 4 times full charging for both earbuds, each earbud can last 6H on single charging. So, you can enjoy 60H music time in total via using in turn.",
                "Wireless Charging and IPX5 Waterproof: The charging case of these bluetooth earbuds support wireless charging and USB C cable charging. These wireless headphones are rating at IPX5 waterproof, the nano-coating on earbuds surface can prevent water and sweat from penetrating, which can use as sport wireless headsets. You can listen to the music while running, working, reading, sleeping, meeting, etc.",
                "One-Step Pairing and Easy Touch Control: TAGRY X08 bluetooth earphones adopts hall switch. After first connection, these wireless earphones will connect with your device once you open the charging case, which is faster and more convenient. During using, you can touch either earbud to control the phone, such as the music switch, volume adjustment, phone calls, voice assistant, etc. No need to adjust through your mobile phones.",
                "Ergonomic Design and Lightweight: TAGRY X08 headphones' structure is the study of thousands of people's ear canal before design. Comes with three different sizes of ear tips, our X08 are fit for most people's ear cannals. These wireless bluetooth headphones are small and light, single earbud is only 0.14oz, earbud size is 1.57*0.78*0.59in, charging case size is 2.56*2.16*1in, It’s more convenient to carry.",
                "Superior Clear Call and Immersive Stereo Sound: These music earphones with 13mm speakers and triple-layer composite diaphragms provide powerful bass, stunning treble and clear mids. These earbuds are designed for sound and music lovers. It can support the mono mode and twin stereo mode, you can share the earbuds with your friends and families. Each earbud has a build-in microphone for phone calls. CVC noise reduction can make others hear your voice very clearly while phone calls."
            ]

        }
    return product_data



def get_all_reviews(current_product):
    with open(f'{THIS_FOLDER}/{current_product}/all_review_data.json', 'r') as file:
        review_data = json.load(file)
    return review_data

def get_top_reviews(current_product):
    with open(f'{THIS_FOLDER}/{current_product}/top_review_data.json', 'r') as file:
        top_review_data = json.load(file)
    return top_review_data
    
@app.route('/')
def index():
    return 'test'

@app.route('/main/<string:current_product>')
def serve_downloaded_page(current_product):
    # Replace '/path/to/your/downloaded/page/' with the actual path where the webpage and its dependent files are stored
    # page_directory = '/Users/apoorvagarwal/Desktop/ra_project/p1h/'
    lab_id = request.args.get('id')
    if lab_id is None:
        return redirect(url_for('index'))
    product_data = get_all_info(current_product, lab_id)
    if current_product == 'product1' or current_product == 'product2':
        return render_template('main.html', product=product_data, lab_id=lab_id, current_product=current_product, main_images=[list(item['main'].keys())[-2] for item in product_data['color_images']['initial']])
    else:
        return render_template('main-books.html', product=product_data, lab_id=lab_id, current_product=current_product, main_images=[list(item['main'].keys())[-2] for item in product_data['color_images']['initial']])
    

@app.route('/main_files/<path:filename>')
@app.route('/main/main_files/<path:filename>')
def serve_main_files(filename):
    # Replace '/path/to/your/downloaded/page/main_files' with the actual path where the 'main_files' directory is stored
    static_directory = f'{THIS_FOLDER}/main_files'
    return send_from_directory(static_directory, filename)


@app.route('/r/<string:current_product>/<int:rate>/<int:page>')
def serve_reviews1(current_product, rate, page):
    lab_id = request.args.get('id')
    print("#"*100)
    print(request.args.get('id'))
    if lab_id is None:
        return redirect(url_for('index'))
    product_data = get_all_info(current_product, lab_id)
    review_data = get_all_reviews(current_product)
    filtered_reviews = [review for review in review_data if review.get('Number') == rate][(page-1)*number_of_reviews_per_page: (page)*number_of_reviews_per_page]
    randomized_filtered_reviews = [filtered_reviews[i] for i in random_orders[len(filtered_reviews)]]
    return render_template('r32.html', current_product=current_product, lab_id=lab_id, review_clicked_records=product_data["review_read_data_all"], reviews=randomized_filtered_reviews, rate=rate, page=page, product=product_data, number_of_pages=number_of_pages, list_of_review_ids = ','.join([str(r["id"]) for r in randomized_filtered_reviews]))


@app.route('/t/<string:current_product>/0/<int:page>')
def serve_reviews_top(current_product, page):
    lab_id = request.args.get('id')
    if lab_id is None:
        return redirect(url_for('index'))
    product_data = get_all_info(current_product, lab_id)
    top_review_data = get_top_reviews(current_product)
    filtered_reviews = [review for review in top_review_data][(page-1)*number_of_reviews_per_page: (page)*number_of_reviews_per_page]
    randomized_filtered_reviews = [filtered_reviews[i] for i in random_orders[len(filtered_reviews)]]
    return render_template('r32.html', current_product=current_product, lab_id=lab_id,  review_clicked_records=product_data["review_read_data_top"], reviews=randomized_filtered_reviews, rate=0, page=page, product=product_data, number_of_pages=number_of_pages, list_of_review_ids = ','.join([str(r["id"]) for r in randomized_filtered_reviews]))


@app.route('/r32_files/<path:filename>')
@app.route('/r/<string:current_product>/<int:x>/r32_files/<path:filename>')
@app.route('/t/<string:current_product>/<int:x>/r32_files/<path:filename>')
def serve_review_files1(filename,current_product,x):
    static_directory = f'{THIS_FOLDER}/r32_files'
    return send_from_directory(static_directory, filename)



def update_distribution(lab_id, type, product, number):
    distribution_entry = Distribution.query.filter_by(lab_id=lab_id).first()
    if type == "all":
        if product == "product1":
            distribution_entry.product_1_ar = distribution_entry.product_1_ar[:number] + '1' + distribution_entry.product_1_ar[number+1:]
        if product == "product2":
            distribution_entry.product_2_ar = distribution_entry.product_2_ar[:number] + '1' + distribution_entry.product_2_ar[number+1:]
        if product == "product3":
            distribution_entry.product_3_ar = distribution_entry.product_3_ar[:number] + '1' + distribution_entry.product_3_ar[number+1:]
        if product == "product4":
            distribution_entry.product_4_ar = distribution_entry.product_4_ar[:number] + '1' + distribution_entry.product_4_ar[number+1:]

    if type == "top":
        # print("%"*100)
        if product == "product1":
            distribution_entry.product_1_tr = distribution_entry.product_1_tr[:number] + '1' + distribution_entry.product_1_tr[number+1:]
        if product == "product2":
            distribution_entry.product_2_tr = distribution_entry.product_2_tr[:number] + '1' + distribution_entry.product_2_tr[number+1:]
        if product == "product3":
            distribution_entry.product_3_tr = distribution_entry.product_3_tr[:number] + '1' + distribution_entry.product_3_tr[number+1:]
        if product == "product4":
            distribution_entry.product_4_tr = distribution_entry.product_4_tr[:number] + '1' + distribution_entry.product_4_tr[number+1:]



@app.route('/<string:current_product>/add_action', methods=['POST'])
def add_action(current_product):
    # print("!"*1000)
    lab_id = request.form.get('lab_id')
    product_data = get_all_info(current_product, lab_id)
    new_product_data = product_data.copy()
    percentages_str = ','.join(str(num) for num in new_product_data["percentages"])
    new_product_data["percentages"] = percentages_str
    new_product_data["product"] = current_product
    keys_to_remove = ['company', 'primary_image', 'thumbnails', 'color_images', 'about', 'title', 'attributes', 'review_read_data_all', 'review_read_data_top']

    for key in keys_to_remove:
        new_product_data.pop(key, None)

    action_name = request.form.get('action_name')
    
    print(action_name)
    print(lab_id)

    # print("!"*8s00)
    # print(current_product)
    # print(review_id)
    if action_name == "Clicked on a Review":
        current_rating = int(request.form.get('current_rating')) or None
        print(current_rating)
        # print("^"*100)
        # review_id = int(request.form.get('review_id')) or None
        if current_rating != 0 and current_rating is not None:
            update_distribution(lab_id, "all", current_product, int(request.form.get('review_id')))
        else:
            # print("%"*100)
            update_distribution(lab_id, "top", current_product, int(request.form.get('review_id')))

        

    
    
    action = Action(
        action_name=request.form.get('action_name'),
        review_id = request.form.get('review_id') or None,
        lab_id = request.form.get('lab_id'),
        other_reviews = request.form.get('other_reviews') or None,
        current_rating = request.form.get('current_rating') or None,
        **new_product_data
    )

    db.session.add(action)
    db.session.commit()
    return jsonify({'message': 'Action added successfully'}), 201


if platform.system() == "Darwin":
    print("The operating system is macOS.")
    if __name__ == '__main__':
        app.run(debug=True)


