from flask import Blueprint, request, jsonify, url_for, current_app
from flask_jwt_extended import create_access_token
from app.models import UserModel
from app.services.email_service import send_email
from app.services.templates import registration_template
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/register', methods=['POST'])
def register():
    data = request.json
    if UserModel.find_user_by_email(data['email']):
        return jsonify({'message': 'Email already exists'}), 400
    
    hashed_password = generate_password_hash(data['password'])
    new_user = {
        "email": data['email'],
        "password": hashed_password,
        "name": data['name'],
    }
    UserModel.create_user(new_user)
    
    # generate url
    with current_app.app_context():
        # logo_url = url_for("static", filename="images/logo.png", _external=True)
        logo_url = "https://i.ibb.co/PQDyMf8/logo.png"
        
        # video_url
        
        video_url = url_for("static", filename="videos/welcome.mp4", _external=True)
        # video_url = url_for("static", filename="videos/welcome.mp4", _external=True)

    # send welcome email
    send_email(
        to_email=data['email'],
        subject="¡Bienvenido/a a Nestai!",
        html_content=registration_template(data['name'], logo_url, video_url)
    )
    return jsonify({'message': 'User registered successfully'}), 201
    

@auth_blueprint.route('/login', methods=['POST'])
def login():
     data = request.json
     user = UserModel.find_user_by_email(data['email'])
     if not user or not check_password_hash(user['password'], data['password']):
         return jsonify({'message': 'Invalid email or password'}), 401
     
     access_token = create_access_token(identity=user['email'], expires_delta=datetime.timedelta(hours=24))
     return jsonify({'access_token': access_token}), 200