import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

function Pin({ item }) {
  if (
    !item ||
    !item.latitude ||
    !item.longitude ||
    !item.images ||
    item.images.length === 0
  ) {
    return null;
  }

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-3 bg-white rounded-lg shadow-md max-w-xs overflow-hidden">
          <img
            src={item.images[0]}
            alt={item.title || "Image"}
            className="w-24 h-16 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between p-2">
            <Link
              to={`/${item.id}`}
              className="text-blue-700 text-sm font-semibold hover:underline"
            >
              {item.title || "No Title Available"}
            </Link>
            <span className="text-gray-600 text-xs">
              {item.bedroom || "N/A"} bedroom
            </span>
            <b className="text-lg text-gray-800">$ {item.price || "N/A"}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
