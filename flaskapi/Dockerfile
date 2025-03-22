FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
# COPY ../model /model

RUN pip install -r requirements.txt
COPY . .  
CMD ["python", "app.py"]
