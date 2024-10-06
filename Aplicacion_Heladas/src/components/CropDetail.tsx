import {
  MapContainer,
  Marker,
  Rectangle,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { useParams } from "react-router-dom";
import data from "./../data/crops.json";
import { useEffect, useState } from "react";
import { getClimate } from "../services/api";
import Chart from "./Chart2";

const MapClick = ({ changeState }: { changeState: any }) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      changeState(lat, lng);
    },
  });
  return null;
};

export const CropDetail = () => {
  let { id } = useParams();
  const [x, setCategories] = useState([]);
  const [y, setSerie] = useState([]);

  const [x2, setCategories2] = useState([]);
  const [y2, setSerie2] = useState([]);

  const [x3, setCategories3] = useState([]);
  const [y3, setSerie3] = useState([]);

  const [state, setUseData] = useState(data["data"][id]);
  useEffect(() => {
    getClimate(state.lat, state.lon).then((data) => {
      let labels: string[] = Object.keys(data["T2M"]);
      let scores = Object.values(data["T2M"]);

      let labels2: string[] = Object.keys(data["QV2M"]);
      let scores2 = Object.values(data["QV2M"]);

      let labels3: string[] = Object.keys(data["V2M"]);
      let scores3 = Object.values(data["V2M"]);

      labels = labels.filter((_, i) => scores[i] > 0);
      scores = scores.filter((score) => score > 0);

      labels2 = labels2.filter((_, i) => scores2[i] > 0);
      scores2 = scores2.filter((score) => score > 0);

      labels3 = labels3.filter((_, i) => scores3[i] > 0);
      scores3 = scores3.filter((score) => score > 0);

      setCategories(labels);
      setSerie(scores);

      setCategories2(labels2);
      setSerie2(scores2);

      setCategories3(labels3);
      setSerie3(scores3);
    });
  }, []);

  const changeState = (lat: number, lon: number) => {
    if (state.crop.length >= 2) {
      const crop = [lat, lon];
      setUseData({ ...state, crop: [crop] });
    } else {
      const crop = [lat, lon];
      setUseData({ ...state, crop: [...state.crop, crop] });
    }
  };

  return (
    <div className="grid grid-rows-2">
      <div className="w-[500px] h-[300px] m-8 rounded-lg border border-black overflow-hidden">
        <MapContainer
          center={[state.lat, state.lon]}
          zoom={8}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[state.lat, state.lon]} />
          {state.crop.length >= 2 ? (
            <Rectangle pathOptions={{ color: "black" }} bounds={state.crop} />
          ) : (
            <></>
          )}
          <MapClick changeState={changeState} />
        </MapContainer>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="w-full  bg-transparent border-2 border-[#1A5319]  rounded-lg text-white h-full grid place-items-center">
          <Chart labels={x3} scores={y3} label={"Wind"} />
        </div>
        <div className="w-full  bg-transparent border-2 border-[#1A5319]  rounded-lg text-white h-full grid place-items-center">
          <Chart labels={x} scores={y} label={"Temperature"} />
        </div>
        <div className="w-full  bg-transparent border-2 border-[#1A5319]  rounded-lg text-white h-full grid place-items-center">
          <Chart labels={x2} scores={y2} label={"Moisture"} />
        </div>
      </div>
    </div>
  );
};
