import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.utils import formataddr
import os

def send_email(to_email, subject, html_content):
    """
    Send E-mail
    """
    
    try:
        # config smtp
        smtp_server = os.getenv("EMAIL_HOST")
        smtp_port = int(os.getenv("EMAIL_PORT", 587))
        smtp_user = os.getenv("EMAIL_USER")
        smtp_password = os.getenv("EMAIL_PASSWORD")
        
        # create message
        message = MIMEMultipart()
        message["From"] = formataddr(("Nestai Donants", smtp_user))
        message["To"] = to_email
        message["Subject"] = subject
        
        # adding html
        message.attach(MIMEText(html_content, 'html'))
        
        # connection and send
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls() # enable tls
            server.login(smtp_user, smtp_password)
            server.send_message(message)
        
        print(f"Email sent successfully to {to_email}!")
        
        
    except Exception as e:
        print(f"Failed to send email to {to_email}: {str(e)}")