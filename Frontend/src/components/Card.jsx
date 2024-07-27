import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="flex flex-col bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden">
      <Link to={`/${item.id}`} className="flex-shrink-0 h-60 w-full">
        <img
          src={item.images[0]} // Accessing the first image in the array
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="flex-1 flex flex-col p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          <Link
            to={`/${item.id}`}
            className="no-underline text-indigo-600 hover:underline hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            {item.title}
          </Link>
        </h2>
        <p className="text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
          <img src="/pin.png" alt="Location" className="w-5 h-5" />
          <span>{item.address}</span>
        </p>
        <p className="text-xl w-full text-center font-semibold bg-yellow-100 text-yellow-600 dark:bg-yellow-200 dark:text-yellow-700 p-2 rounded-lg mb-4">
          ${item.price}
        </p>
        <div className="flex gap-4">
          <div className="border border-gray-600 p-2 rounded-lg cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src="/save.png" alt="Save" className="w-5 h-5" />
          </div>
          <div className="border border-gray-600 p-2 rounded-lg cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src="/chat.png" alt="Chat" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
