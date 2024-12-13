from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from app.services.user_analysis import analyze_users
import pandas as pd

user_blueprint = Blueprint('users', __name__)

@user_blueprint.route('/analyze', methods=['GET'])
@jwt_required()
def analyze():
    analysis = analyze_users()
    return jsonify(analysis), 200


@user_blueprint.route('/analysis', methods=['GET'])
@jwt_required()
def donation_analysis():
    if request.method == 'OPTIONS':
        return '', 200  # Responde a la solicitud preflight con un estado 200
    """
    Get data from the database and perform analysis on donations.
    """
    try:
        dataset_path = "../data/consolidated.csv"
        df = pd.read_csv(dataset_path)
        
        # 1. Most popular causes
        causes_count = df["interests"].value_counts().to_dict()
        
        # 2. Age analysis
        age_distribution = df["age"].value_counts().to_dict()
        
        # 3. Donation amount analysis
        total_amount_donated = float(df["donation_amount"].sum())

        # 4. donations by date analysis
        df["donation_date"] = pd.to_datetime(df["donation_date"])
        df["month"] = df["donation_date"].dt.month_name()
        monthly_donations = df["month"].value_counts().sort_index().to_dict()
        
        # response of analysis
        analysis = {
            "causes_count": causes_count,
            "age_distribution": age_distribution,
            "total_amount_donated": total_amount_donated,
            "monthly_donations": monthly_donations
        }
        
        return jsonify(analysis), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500