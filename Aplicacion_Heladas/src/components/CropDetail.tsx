import { MapContainer, Marker, Polygon, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import data from "./../data/crops.json";

export const CropDetail = () => {
  let { id } = useParams();
  const { lat, lon, rectangle } = data["data"][id];

  return (
    <div className="w-[500px] h-[300px] m-8 rounded-lg border border-black overflow-hidden">
      <MapContainer
        center={[lat, lon]}
        zoom={8}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lon]} />
        <Polygon pathOptions={{ color: "lime" }} positions={rectangle} />
      </MapContainer>
    </div>
  );
};
