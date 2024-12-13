import pandas as pd
from app.services.email_service import send_email
from app.services.templates import inactivity_template
from app.services.templates import anniversary_template
import datetime

def analyze_users():
    dataset = pd.read_csv('../data/consolidated.csv')
    non_current = dataset[dataset['donation_type'] != 'Recurrent']
    return non_current.to_dict(orient='records')


def notify_inactivity_users():
    dataset = pd.read_csv('../data/consolidated.csv')
    today = datetime.datetime.today()
    
    # not recurrent users that has not been donated during 6 months
    inactive_users = dataset[
        (dataset['donation_type'] == 'Punctual') & (pd.to_datetime(dataset['donation_date']) < (today - datetime.timedelta(days=180)))
    ]
    
    for _, user in inactive_users.iterrows:
        send_email(
            to_email=['email'],
            subject='Te extrañamos en Nestai...',
            html_content=inactivity_template(user['name'])
        )
        
def notify_anniversaries():
    dataset = pd.read_csv('../data/consolidated.csv')
    
    # recurrent users during 1 year
    anniversary_users = dataset[
        (dataset['donation_type' == 'Recurrent']) & (pd.to_datetime(dataset['start_donation_date']) <= (datetime.date.today() - datetime.timedelta(days=365)))
    ]
    
    for _, user in anniversary_users.iterrows():
        send_email(
            to_email=user['email'],
            subject="¡Feliz aniversario como donante!",
            html_content=anniversary_template(user['name'])
        )