from pymongo import MongoClient
from flask import current_app


def get_db():
    client = MongoClient(current_app.config['MONGODB_URI'])
    db = client.get_database()
    return db

class UserModel:
    @staticmethod
    def find_user_by_email(email):
        db = get_db()
        return db.users.find_one({'email': email})
    
    @staticmethod
    def create_user(user_data):
        db = get_db()
        return db.users.insert_one(user_data)
    
class FeedbackModel:
    @staticmethod
    def save_feedback(feedback_data):
        db = get_db()
        feedback_collection = db['feedback']
        feedback_collection.insert_one(feedback_data)