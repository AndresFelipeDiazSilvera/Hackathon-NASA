from app import app
from flask import request, Response, json

from .utils.predict import predict

from .utils.transform_data import to_keras_df

from .services import api_nasa
from datetime import datetime
from dateutil.relativedelta import relativedelta


@app.route("/climate-info", methods=['GET'])
def getInfo():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    endNotFormat = datetime.now()
    end = endNotFormat.strftime("%Y%m%d")
    start = (endNotFormat - relativedelta(years=1)).strftime("%Y%m%d")
    url = f"https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M,QV2M,PRECTOTCORR,V2M&community=RE&longitude={lon}&latitude={lat}&start={start}&end={end}&format=JSON"
    data = api_nasa.make_request(url)["properties"]["parameter"]
    json_responsive = json.dumps(data)
    return Response(json_responsive, content_type="application/json")


@app.route("/prediction", methods=['GET'])
def prediction():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    end_date = datetime.now()
    end_date_str = end_date.strftime("%Y%m%d")
    if end_date_str[:-2] < "05":
        end_date = datetime.now() - relativedelta(days=3)
        end_date_str = end_date.strftime("%Y%m%d")

    start_date = end_date - relativedelta(days=10)
    start_date_str = start_date.strftime("%Y%m%d")

    print(start_date_str)
    print(end_date_str)
    url = f"https://power.larc.nasa.gov/api/temporal/hourly/point?parameters=T2M,QV2M,V2M&community=RE&longitude={lon}&latitude={lat}&start={start_date_str}&end={end_date_str}&format=JSON"
    data = api_nasa.make_request(url)["properties"]["parameter"]
    df = to_keras_df(data, end_date_str[4:6], end_date_str[6:8])
    result =  predict(df)

    return Response(json.dumps(float(result[0])))
