from flask import Blueprint, request, jsonify
from textblob import TextBlob
from app.models import FeedbackModel

feedback_blueprint = Blueprint("feedback", __name__)

def evaluate_feedback(data):
    """
    Asigna puntuaciones a las respuestas para evaluar si la encuesta es positiva o negativa.
    """
    scores = {
        "reason": {
            "Interés en ayudar a la causa específica.": 2,
            "Valores personales de solidaridad.": 2,
            "Referencia de alguien cercano.": 1,
            "Otro": 0
        },
        "satisfaction": {
            "Muy satisfecho": 2,
            "Satisfecho": 1,
            "Insatisfecho": -1,
            "Muy insatisfecho": -2
        },
        "update_preference": {
            "Correo electrónico": 1,
            "Redes sociales": 1,
            "Mensajes personalizados": 2,
            "No me interesa recibir actualizaciones": -1
        },
        "appreciation": {
            "Muy importante": 2,
            "Algo importante": 1,
            "Poco importante": 0,
            "No es importante": -1
        },
        "content_preference": {
            "Historias personales de beneficiarios": 2,
            "Estadísticas e informes de impacto": 1,
            "Oportunidades para participar más activamente": 2,
            "Otro": 0
        }
    }

    
    total_score = 0
    for key, value in data.items():
        if key in scores and value in scores[key]:
            total_score += scores[key][value]

   
    return "Positivo" if total_score > 0 else "Negativo"

@feedback_blueprint.route('/feedback', methods=['POST'])
def handle_feedback():
    try:
        data = request.json
        if not data:
            return jsonify({"error": "No data provided"}), 400

       
        analysis = {}
        if 'other_reason' in data and data['other_reason']:
            blob = TextBlob(data['other_reason'])
            analysis['other_reason_sentiment'] = blob.sentiment.polarity

        if 'other_content' in data and data['other_content']:
            blob = TextBlob(data['other_content'])
            analysis['other_content_sentiment'] = blob.sentiment.polarity

       
        general_feedback = evaluate_feedback(data)

        
        feedback_data = {
            **data,
            "analysis": analysis,  # Resultados del análisis de sentimientos
            "general_feedback": general_feedback  # Positivo o Negativo
        }
        FeedbackModel.save_feedback(feedback_data)

        return jsonify({"message": "Feedback saved successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500