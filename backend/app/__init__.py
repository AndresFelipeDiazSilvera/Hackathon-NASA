from flask import Flask
from flask_cors import CORS
from tensorflow import keras

app: Flask = Flask(__name__)
model: keras.Model = keras.models.load_model(
    "./app/models/model_2023_72h.keras"
)

CORS(app)

from app import routes

