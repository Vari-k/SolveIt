FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
# COPY ../model /model

RUN pip install -r requirements.txt
COPY . .  
EXPOSE 5000
# CMD ["python", "app.py"]
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]