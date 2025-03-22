FROM python:3.10-slim

WORKDIR /app

COPY . /app
# COPY ../model /model

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "app.py"]
