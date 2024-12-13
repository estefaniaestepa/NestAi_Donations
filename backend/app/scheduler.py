import schedule
import time
from app.services.user_analysis import notify_inactivity_users, notify_anniversaries

def run_scheduler():
    
    schedule.every().day.at("10:00").do(notify_inactivity_users)
    schedule.every().day.at("12:00").do(notify_anniversaries)

    print("Starting scheduler...")

    while True:
        schedule.run_pending()
        time.sleep(1)