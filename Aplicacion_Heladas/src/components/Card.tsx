import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  lat: number;
  lon: number;
};

export const Card = ({ id, lat, lon }: Props) => {
  return (
    <div className="max-w-md mt-3 bg-white border border-gray-200 overflow-hidden rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/crop/${id}`}>
        <div className="h-56 rounded-t-lg" id="map">
          <MapContainer
            center={[lat, lon]}
            zoom={18}
            zoomControl={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[lat, lon]} />
          </MapContainer>
        </div>
      </Link>
      <div className="p-5 bg-[#1E3E62]">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Ubicación del cultivo
          </h5>
        </a>
        <p className="mb-3 font-normal text-white">
          {lat}, {lon}
        </p>
        <Link
          to={`/crop/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none dark:bg-[#508D4E] dark:hover:bg-[#80AF81]"
        >
          Ver más información
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
