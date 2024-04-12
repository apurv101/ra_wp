from flask import Flask, request, jsonify, render_template, send_file, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from datetime import datetime, timezone
import pytz
import random
import os

from pathlib import Path
THIS_FOLDER = Path(__file__).parent.resolve()

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://apoorvagarwal@localhost/ra_db_1"
db = SQLAlchemy(app)
migrate = Migrate(app, db)
import json
import os

# ROOT_DIR = "/Users/apoorvagarwal/Desktop/ra_project"



random_orders = {}
for i in range(30):
    random_orders[i] = random.sample(range(i), i)
    random_orders[i] = random.sample(range(i), i)



number_of_reviews_per_page = 10
number_of_pages = 30//number_of_reviews_per_page






all_review_read_data = {}
top_review_read_data = {}
products = ['product1', 'product2', 'product3', 'product4']
for product in products:
    with open(f'{THIS_FOLDER}/{product}/all_review_data.json', 'r') as file:
        review_data = json.load(file)
        all_review_read_data[product] = [0]*len(review_data)
    with open(f'{THIS_FOLDER}/{product}/top_review_data.json', 'r') as file:
        review_data = json.load(file)
        top_review_read_data[product] = [0]*len(review_data)







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


    
@app.route('/actions')
def show_actions():
    # Assuming you have a function to query Action objects from the database
    actions = Action.query.all()
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
    

def get_all_info(current_product):

    if current_product == "product1":
        product_data = {
            "title": "Bluetooth Headphones True Wireless Earbuds 60H Playback LED Power Display Earphones with Wireless Charging Case IPX5 Waterproof in-Ear Earbuds with Mic for TV Smart Phone Laptop Computer Sports",
            "price": "29.73",
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
    elif current_product == "product2":
        product_data = {
            "title": "Wireless Earbuds Bluetooth Headphones, 40H Playtime Stereo IPX5 Waterproof Ear Buds, LED Power Display Cordless in-Ear Earphones with Microphone for iOS Andriod Cell Phone Sports",
            "price": "21.99",
            "company": "Product2",
            "primary_image": "https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX679_.jpg",
            "thumbnails":[],
            "color_images": { 'initial': [{"hiRes":"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41LTRytAadL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41LTRytAadL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/61IOFpeimnL._AC_SX679_.jpg":[849,679]},"variant":"MAIN","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/51TDaI52QxL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/51TDaI52QxL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/71xIWZ78g7L._AC_SX679_.jpg":[849,679]},"variant":"PT01","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41gUEZUK+9L._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41gUEZUK+9L._AC_.jpg","main":{"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/610EPQQXjtL._AC_SX679_.jpg":[849,679]},"variant":"PT02","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41IaL4UTtcL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41IaL4UTtcL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/61Tg9O0VCoL._AC_SX679_.jpg":[849,679]},"variant":"PT03","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41uiGleFjuL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41uiGleFjuL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/61Oj+b7MJTL._AC_SX679_.jpg":[849,679]},"variant":"PT04","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41teSwpz8AL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41teSwpz8AL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SY355_.jpg":[355,284],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SY450_.jpg":[450,360],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SX425_.jpg":[531,425],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SX466_.jpg":[583,466],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SX522_.jpg":[653,522],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SX569_.jpg":[711,569],"https://m.media-amazon.com/images/I/61jvCfPa3wL._AC_SX679_.jpg":[849,679]},"variant":"PT05","lowRes":None,"shoppableScene":None}]},
            "number_of_reviews": "6,834",
            "overall_rating": "3.9",
            "percentages": [90, 1, 3, 2, 4],
            "attributes":[["Brand","TAGRY"],["Model Name","X08"],["Color", "Black"],["Form Factor","In Ear"],["Connectivity Technology", "Wireless"]],
            "about": [
                "LED Power Display and 60H Playback: Dual digital LED power display outside of the case is to show the power level for charging case and earbuds. When charging for the case, the LED light will start to flash from 1 to 100. When you put earbuds into the case, then earbuds will start to be charged. 470mAh battery capacity charging case can provide extra 4 times full charging for both earbuds, each earbud can last 6H on single charging. So, you can enjoy 60H music time in total via using in turn.",
                "Wireless Charging and IPX5 Waterproof: The charging case of these bluetooth earbuds support wireless charging and USB C cable charging. These wireless headphones are rating at IPX5 waterproof, the nano-coating on earbuds surface can prevent water and sweat from penetrating, which can use as sport wireless headsets. You can listen to the music while running, working, reading, sleeping, meeting, etc.",
                "One-Step Pairing and Easy Touch Control: TAGRY X08 bluetooth earphones adopts hall switch. After first connection, these wireless earphones will connect with your device once you open the charging case, which is faster and more convenient. During using, you can touch either earbud to control the phone, such as the music switch, volume adjustment, phone calls, voice assistant, etc. No need to adjust through your mobile phones.",
                "Ergonomic Design and Lightweight: TAGRY X08 headphones' structure is the study of thousands of people's ear canal before design. Comes with three different sizes of ear tips, our X08 are fit for most people's ear cannals. These wireless bluetooth headphones are small and light, single earbud is only 0.14oz, earbud size is 1.57*0.78*0.59in, charging case size is 2.56*2.16*1in, It’s more convenient to carry.",
                "Superior Clear Call and Immersive Stereo Sound: These music earphones with 13mm speakers and triple-layer composite diaphragms provide powerful bass, stunning treble and clear mids. These earbuds are designed for sound and music lovers. It can support the mono mode and twin stereo mode, you can share the earbuds with your friends and families. Each earbud has a build-in microphone for phone calls. CVC noise reduction can make others hear your voice very clearly while phone calls."
            ]
        }
    elif current_product == "product3":
        product_data = {
            "title": "by Ann Napolitano",
            "price": "29.73",
            "company": "Hello Beautiful (Oprah's Book Club): A Novel",
            "primary_image": "https://m.media-amazon.com/images/I/91R1x+Q+YRL._SY522_.jpg",
            "thumbnails":[],
            "color_images": { 'initial': [{"hiRes":"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY355_.jpg":[355,316],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY450_.jpg":[450,401],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX425_.jpg":[477,425],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX466_.jpg":[523,466],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX522_.jpg":[586,522],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX569_.jpg":[639,569],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX679_.jpg":[762,679]},"variant":"MAIN","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX679_.jpg":[679,679]},"variant":"PT01","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX679_.jpg":[679,679]},"variant":"PT02","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX679_.jpg":[679,679]},"variant":"PT03","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX679_.jpg":[679,679]},"variant":"PT04","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX679_.jpg":[679,679]},"variant":"PT05","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX679_.jpg":[679,679]},"variant":"PT06","lowRes":None,"shoppableScene":None}]},
            "number_of_reviews": "6,834",
            "overall_rating": "3.9",
            "percentages": [56, 11, 12, 17, 4],
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
                ]
        }
    elif current_product == "product4":
        product_data = {
            "title": "by James McBride",
            "price": "29.73",
            "company": "The Heaven & Earth Grocery Store (Oprah's Book Club): A Novel",
            "primary_image": "https://m.media-amazon.com/images/I/81DjECnYLJL._SY522_.jpg",
            "thumbnails":[],
            "color_images": { 'initial': [{"hiRes":"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41jhM7IY4uL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY355_.jpg":[355,316],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SY450_.jpg":[450,401],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX425_.jpg":[477,425],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX466_.jpg":[523,466],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX522_.jpg":[586,522],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX569_.jpg":[639,569],"https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX679_.jpg":[762,679]},"variant":"MAIN","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/51j-a0BvycL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71fDjkaD51L._AC_SX679_.jpg":[679,679]},"variant":"PT01","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41gdcIgZ6NL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71QHgA9WOSL._AC_SX679_.jpg":[679,679]},"variant":"PT02","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41-8BmtR0VL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61E2gTdCPDL._AC_SX679_.jpg":[679,679]},"variant":"PT03","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41TqJBRSlYL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/711RMFk+V3L._AC_SX679_.jpg":[679,679]},"variant":"PT04","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41zLZVxnZML._AC_.jpg","main":{"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61vDm+Lz5JL._AC_SX679_.jpg":[679,679]},"variant":"PT05","lowRes":None,"shoppableScene":None},{"hiRes":"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_US40_.jpg","large":"https://m.media-amazon.com/images/I/41vhkesQxVL._AC_.jpg","main":{"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY355_.jpg":[355,355],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SY450_.jpg":[450,450],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71IVAm98LtL._AC_SX679_.jpg":[679,679]},"variant":"PT06","lowRes":None,"shoppableScene":None}]},
            "number_of_reviews": "6,834",
            "overall_rating": "3.9",
            "percentages": [33, 9, 17, 17, 24],
            "attributes":[],
            "about": [
                "From James McBride, author of the bestselling Oprah’s Book Club pick Deacon King Kong and the National Book Award–winning The Good Lord Bird, a novel about small-town secrets and the people who keep them",
                "In 1972, when workers in Pottstown, Pennsylvania, were digging the foundations for a new development, the last thing they expected to find was a skeleton at the bottom of a well. Who the skeleton was and how it got there were two of the long-held secrets kept by the residents of Chicken Hill, the dilapidated neighborhood where immigrant Jews and African Americans lived side by side and shared ambitions and sorrows. Chicken Hill was where Moshe and Chona Ludlow lived when Moshe integrated his theater and where Chona ran the Heaven & Earth Grocery Store. When the state came looking for a deaf boy to institutionalize him, it was Chona and Nate Timblin, the Black janitor at Moshe’s theater and the unofficial leader of the Black community on Chicken Hill, who worked together to keep the boy safe.",
                "As these characters’ stories overlap and deepen, it becomes clear how much the people who live on the margins of white, Christian America struggle and what they must do to survive. When the truth is finally revealed about what happened on Chicken Hill and the part the town’s white establishment played in it, McBride shows us that even in dark times, it is love and community—heaven and earth—that sustain us.",
                "Bringing his masterly storytelling skills and his deep faith in humanity to The Heaven & Earth Grocery Store, James McBride has written a novel as compassionate as Deacon King Kong and as inventive as The Good Lord Bird."
                        ]
        }
    else:
        product_data = {
            "title": "Bluetooth Headphones True Wireless Earbuds 60H Playback LED Power Display Earphones with Wireless Charging Case IPX5 Waterproof in-Ear Earbuds with Mic for TV Smart Phone Laptop Computer Sports",
            "price": "29.73",
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
    product_data = get_all_info(current_product)
    if current_product == 'product1' or current_product == 'product2':
        return render_template('main.html', product=product_data, current_product=current_product, main_images=[list(item['main'].keys())[-2] for item in product_data['color_images']['initial']])
    else:
        return render_template('main-books.html', product=product_data, current_product=current_product, main_images=[list(item['main'].keys())[-2] for item in product_data['color_images']['initial']])
    

@app.route('/main_files/<path:filename>')
@app.route('/main/main_files/<path:filename>')
def serve_main_files(filename):
    # Replace '/path/to/your/downloaded/page/main_files' with the actual path where the 'main_files' directory is stored
    static_directory = f'{THIS_FOLDER}/main_files'
    return send_from_directory(static_directory, filename)


@app.route('/r/<string:current_product>/<int:rate>/<int:page>')
def serve_reviews1(current_product, rate, page):
    product_data = get_all_info(current_product)
    review_data = get_all_reviews(current_product)
    filtered_reviews = [review for review in review_data if review.get('Number') == rate][(page-1)*number_of_reviews_per_page: (page)*number_of_reviews_per_page]
    randomized_filtered_reviews = [filtered_reviews[i] for i in random_orders[len(filtered_reviews)]]
    return render_template('r32.html', current_product=current_product, review_clicked_records=all_review_read_data[current_product], reviews=randomized_filtered_reviews, rate=rate, page=page, product=product_data, number_of_pages=number_of_pages, list_of_review_ids = ','.join([str(r["id"]) for r in randomized_filtered_reviews]))


@app.route('/t/<string:current_product>/0/<int:page>')
def serve_reviews_top(current_product, page):
    product_data = get_all_info(current_product)
    top_review_data = get_top_reviews(current_product)
    filtered_reviews = [review for review in top_review_data][(page-1)*number_of_reviews_per_page: (page)*number_of_reviews_per_page]
    randomized_filtered_reviews = [filtered_reviews[i] for i in random_orders[len(filtered_reviews)]]
    return render_template('r32.html', current_product=current_product, review_clicked_records=top_review_read_data[current_product], reviews=randomized_filtered_reviews, rate=0, page=page, product=product_data, number_of_pages=number_of_pages, list_of_review_ids = ','.join([str(r["id"]) for r in randomized_filtered_reviews]))


@app.route('/r32_files/<path:filename>')
@app.route('/r/<string:current_product>/<int:x>/r32_files/<path:filename>')
@app.route('/t/<string:current_product>/<int:x>/r32_files/<path:filename>')
def serve_review_files1(filename,current_product,x):
    static_directory = f'{THIS_FOLDER}/r32_files'
    return send_from_directory(static_directory, filename)



@app.route('/<string:current_product>/add_action', methods=['POST'])
def add_action(current_product):
    # print("!"*1000)
    product_data = get_all_info(current_product)
    new_product_data = product_data.copy()
    percentages_str = ','.join(str(num) for num in new_product_data["percentages"])
    new_product_data["percentages"] = percentages_str
    new_product_data["product"] = current_product
    keys_to_remove = ['company', 'primary_image', 'thumbnails', 'color_images', 'about', 'title', 'attributes']

    for key in keys_to_remove:
        new_product_data.pop(key, None)

    action_name = request.form.get('action_name')
    
    # print("!"*800)
    # print(current_product)
    # print(review_id)
    if action_name == "Clicked on a Review":
        current_rating = int(request.form.get('current_rating')) or None
        review_id = int(request.form.get('review_id')) or None
        if current_rating != 0:
            all_review_read_data[current_product][review_id] = 1
        else:
            top_review_read_data[current_product][review_id] = 1

    
    
    action = Action(
        action_name=request.form.get('action_name'),
        review_id = request.form.get('review_id') or None,
        other_reviews = request.form.get('other_reviews') or None,
        current_rating = request.form.get('current_rating') or None,
        **new_product_data
    )

    db.session.add(action)
    db.session.commit()
    return jsonify({'message': 'Action added successfully'}), 201



if __name__ == '__main__':
    app.run(debug=True)


