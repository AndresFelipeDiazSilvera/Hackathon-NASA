from app import app
from flask import request, Response, json
from .services import api_nasa
from datetime import datetime
from dateutil.relativedelta import relativedelta

@app.route("/", methods = ['GET'])
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