import "leaflet/dist/leaflet.css";
import { Card } from "./components/Card";
import data from "./data/crops.json"

function Cards() {
  const cards = data["data"]
  return (
    <div className="p-8 flex justify-center items-start flex-wrap  pb-10 gap-3">
      {cards.map(({ lat, lon }, i) => (
        <Card id={i} lat={lat} lon={lon} key={`card-${i}`} />
      ))}
    </div>
  );
}

export default Cards;

