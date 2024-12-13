from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from app.routes.feedback_routes import feedback_blueprint
from dotenv import load_dotenv
import os


load_dotenv()

def create_app():
    app = Flask(__name__, static_folder='static')
    
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default_secret_key')
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'jwt_secret_key')
    app.config['MONGODB_URI'] = os.getenv('MONGODB_URI', 'mongodb://localhost:27017/nestai')
    
    
    # extensions
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

    
    # init jwt
    JWTManager(app)

    # routes
    from app.routes.auth_routes import auth_blueprint
    from app.routes.donation_routes import donation_blueprint
    from app.routes.user_routes import user_blueprint
    
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
    app.register_blueprint(donation_blueprint, url_prefix='/donations')
    app.register_blueprint(user_blueprint, url_prefix='/users')
    app.register_blueprint(feedback_blueprint, url_prefix='/api')
    
    
    return app