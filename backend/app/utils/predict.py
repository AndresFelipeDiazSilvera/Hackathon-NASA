from app import model
import numpy as np

def predict(df):
    features = ['MES', 'DIA', 'HORA', 'TEMP', 'WIND', 'MOISTURE']
    target_features = ['TEMP']
    X_new = create_sequences(df, features, target_features)[0]
    return model.predict(X_new)[0]

def create_sequences(df, features, target_features, sequence_length=24):
    X = []
    y = []

    for i in range(len(df) - sequence_length - 1):
        X.append(df[features].iloc[i:i+sequence_length].values)
        next_day_5am_idx = i + sequence_length - 1  # Índice para las 5 AM del día siguiente

        if next_day_5am_idx < len(df):
            y.append(df[target_features].iloc[next_day_5am_idx].values)

    return np.array(X), np.array(y)
