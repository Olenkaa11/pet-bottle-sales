import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на email info-pet.tara@yandex.ru"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    message = body.get('message', '').strip()

    if not name or not contact:
        return {'statusCode': 400, 'headers': {'Access-Control-Allow-Origin': '*'}, 'body': json.dumps({'error': 'Заполните имя и контакт'})}

    smtp_user = os.environ['SMTP_USER']
    smtp_password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта ПЭТ Тара от {name}'
    msg['From'] = smtp_user
    msg['To'] = 'info-pet.tara@yandex.ru'

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <h2 style="color: #1a1a1a; border-bottom: 2px solid #e8e6e2; padding-bottom: 10px;">Новая заявка с сайта ПЭТ Тара</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #999; width: 140px;">Имя</td><td style="padding: 8px 0; font-weight: bold;">{name}</td></tr>
        <tr><td style="padding: 8px 0; color: #999;">Контакт</td><td style="padding: 8px 0; font-weight: bold;">{contact}</td></tr>
        <tr><td style="padding: 8px 0; color: #999; vertical-align: top;">Сообщение</td><td style="padding: 8px 0;">{message or '—'}</td></tr>
      </table>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, 'info-pet.tara@yandex.ru', msg.as_string())

    return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*'}, 'body': json.dumps({'ok': True})}
