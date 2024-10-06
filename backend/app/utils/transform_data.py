import pandas as pd


def to_keras_df(data, month: str, day: str):
    print ("data: \n",data)
    days = pd.Series(data["T2M"].keys()).apply(lambda x: x[6:8])
    months = pd.Series(data["T2M"].keys()).apply(lambda x: x[4:6])
    hours = pd.Series(data["T2M"].keys()).apply(lambda x: x[8:])

    df = pd.DataFrame({
        "DIA": days,
        "MES": months,
        "HORA": hours,
        "TEMP": data["T2M"].values(),
        "WIND": data["V2M"].values(),
        "MOISTURE": data["QV2M"].values(),
    })
    
    print("month", month)
    print("day", day)
    filtro = (df["MES"] == month) & (df["DIA"] == day) & (df["HORA"] == "05")
    indice = int(df[filtro].index[0])
    print(indice)
    return df.iloc[(indice-73)-73:indice-72].astype(float)

