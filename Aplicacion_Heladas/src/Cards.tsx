import "leaflet/dist/leaflet.css";
import { Card } from "./components/Card";

function Cards() {
    const cards = [
        { lat: 5.53528, lon: -73.36778 },
        { lat: 5.53528, lon: -73.36778 },
        { lat: 5.53528, lon: -73.36778 },
    ];

  return (
    <div className="p-8 flex justify-center items-start flex-wrap space-x-4 space-y-0 pb-24">
      {cards.map(({ lat, lon }, i) => (
        <Card lat={lat} lon={lon} key={`card-${i}`} />
      ))}
    </div>
  );
}

export default Cards;

