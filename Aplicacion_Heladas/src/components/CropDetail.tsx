import { MapContainer, Marker, Polygon, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import data from "./../data/crops.json"

export const CropDetail = () => {
    let { id } = useParams();
    const {lat, lon, rectangle} = data["data"][id]

  return (
    <div className="w-300 h-300">
      <MapContainer
        center={[lat, lon]}
        zoom={18}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lon]} />
        <Polygon pathOptions={{color: "lime"}} positions={rectangle} />
      </MapContainer>
    </div>
  );
};
