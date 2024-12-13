from flask import Blueprint, jsonify, request
from app.models import get_db
from app.services.email_service import send_email
from app.services.templates import donation_template

donation_blueprint = Blueprint('donations', __name__)

@donation_blueprint.route('/', methods=['GET'])
def create_donation():
    db = get_db()
    donations = list(db.donations.find())
    return jsonify(donations), 200

@donation_blueprint.route('/donate', methods=['POST'])
def donate():
    data = request.json
    # process donation
    donation_amount = data['amount']
    user_email = data['email']
    user_name = data['name']
    
    # send thankful email
    send_email(
        to_email=user_email,
        subject="¡Gracias por tu donación!",
        html_content=donation_template(user_name, donation_amount)
    )
    
    return jsonify({"message": "Donation processed successfully"}), 200