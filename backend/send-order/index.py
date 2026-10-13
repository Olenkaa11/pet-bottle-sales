import json
import smtplib
import os
import html
import urllib.request
import urllib.parse
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

CORS = {'Access-Control-Allow-Origin': '*'}


def send_email(name: str, contact: str, message: str) -> bool:
    smtp_user = 'info-pet.tara@mail.ru'
    smtp_password = os.environ.get('MAIL_RU_PASSWORD')
    if not smtp_password:
        return False

    n, c = html.escape(name), html.escape(contact)
    m = html.escape(message).replace('\n', '<br>') or '—'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта ПЭТ Тара от {name}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    body = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <h2 style="color: #1a1a1a; border-bottom: 2px solid #e8e6e2; padding-bottom: 10px;">Новая заявка с сайта ПЭТ Тара</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #999; width: 140px;">Имя</td><td style="padding: 8px 0; font-weight: bold;">{n}</td></tr>
        <tr><td style="padding: 8px 0; color: #999;">Контакт</td><td style="padding: 8px 0; font-weight: bold;">{c}</td></tr>
        <tr><td style="padding: 8px 0; color: #999; vertical-align: top;">Сообщение</td><td style="padding: 8px 0;">{m}</td></tr>
      </table>
    </div>
    """
    msg.attach(MIMEText(body, 'html'))

    try:
        with smtplib.SMTP_SSL('smtp.mail.ru', 465, timeout=4) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, smtp_user, msg.as_string())
        return True
    except Exception as e:
        print(f'email failed: {e}')
        return False


def send_telegram(name: str, contact: str, message: str) -> bool:
    token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    if not token or not chat_id:
        return False

    text = f'Новая заявка с сайта\n\nИмя: {name}\nКонтакт: {contact}\n{message or ""}'
    data = urllib.parse.urlencode({'chat_id': chat_id, 'text': text[:4000]}).encode()
    try:
        req = urllib.request.Request(f'https://api.telegram.org/bot{token}/sendMessage', data=data)
        with urllib.request.urlopen(req, timeout=4) as resp:
            return resp.status == 200
    except Exception as e:
        print(f'telegram failed: {e}')
        return False


def handler(event: dict, context) -> dict:
    """Приём заявки с сайта: отправка на почту info-pet.tara@mail.ru и в Telegram-бот. Успех только если доставлено хотя бы в один канал"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {**CORS, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = str(body.get('name', '')).strip()[:200]
    contact = str(body.get('contact', '')).strip()[:200]
    message = str(body.get('message', '')).strip()[:2000]

    if not name or not contact:
        return {'statusCode': 400, 'headers': CORS, 'body': json.dumps({'error': 'Заполните имя и контакт'}, ensure_ascii=False)}

    email_ok = send_email(name, contact, message)
    tg_ok = send_telegram(name, contact, message)

    if not (email_ok or tg_ok):
        return {'statusCode': 502, 'headers': CORS, 'body': json.dumps({'error': 'Не удалось доставить заявку'}, ensure_ascii=False)}

    return {'statusCode': 200, 'headers': CORS, 'body': json.dumps({'ok': True, 'email': email_ok, 'telegram': tg_ok})}
