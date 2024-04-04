from flask import Flask, request, jsonify, render_template, send_file, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from datetime import datetime, timezone
import pytz

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://apoorvagarwal@localhost/ra_db_1'
db = SQLAlchemy(app)
migrate = Migrate(app, db)
import json

# Load JSON data from a file
with open('review_data.json', 'r') as file:
    review_data = json.load(file)
with open('review_data_1.json', 'r') as file:
    top_review_data = json.load(file)




number_of_reviews_per_page = 10
number_of_pages = 30//number_of_reviews_per_page






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
    

@app.route('/main')
def serve_downloaded_page():
    # Replace '/path/to/your/downloaded/page/' with the actual path where the webpage and its dependent files are stored
    # page_directory = '/Users/apoorvagarwal/Desktop/ra_project/p1h/'
    return render_template('main.html', product=product_data, main_images=[list(item['main'].keys())[-2] for item in product_data['color_images']['initial']])

@app.route('/main_files/<path:filename>')
def serve_main_files(filename):
    # Replace '/path/to/your/downloaded/page/main_files' with the actual path where the 'main_files' directory is stored
    static_directory = '/Users/apoorvagarwal/Desktop/ra_project/main_files'
    return send_from_directory(static_directory, filename)


@app.route('/r/<int:rate>/<int:page>')
def serve_reviews1(rate, page):
    filtered_reviews = [review for review in review_data if review.get('Number') == rate][(page-1)*number_of_reviews_per_page: (page)*number_of_reviews_per_page]
    return render_template('r32.html', reviews=filtered_reviews, rate=rate, page=page, product=product_data, number_of_pages=number_of_pages, list_of_review_ids = ','.join([str(r["id"]) for r in filtered_reviews]))


@app.route('/t/0/<int:page>')
def serve_reviews_top(page):
    filtered_reviews = [review for review in top_review_data][(page-1)*number_of_reviews_per_page: (page)*number_of_reviews_per_page]
    return render_template('r32.html', reviews=filtered_reviews, rate=0, page=page, product=product_data, number_of_pages=number_of_pages, list_of_review_ids = ','.join([str(r["id"]) for r in filtered_reviews]))


@app.route('/r32_files/<path:filename>')
@app.route('/r/<int:x>/r32_files/<path:filename>')
@app.route('/t/<int:x>/r32_files/<path:filename>')
def serve_review_files1(filename,x):
    static_directory = '/Users/apoorvagarwal/Desktop/ra_project/r32_files'
    return send_from_directory(static_directory, filename)



@app.route('/add_action', methods=['POST'])
def add_action():
    print("!"*1000)
    new_product_data = product_data.copy()
    percentages_str = ','.join(str(num) for num in new_product_data["percentages"])
    new_product_data["percentages"] = percentages_str
    
    keys_to_remove = ['company', 'primary_image', 'thumbnails', 'color_images', 'about', 'title', 'attributes']

    for key in keys_to_remove:
        new_product_data.pop(key, None)
    
    

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


