import React from "react";

function Filter() {
  return (
    <div className="flex flex-col gap-2 ml-1">
      <h1 className="font-semibold text-3xl mb-2 text-black">
        Search results for:
      </h1>

      <div className="flex flex-col gap-3">
        <div className="w-full max-w-md">
          <label htmlFor="city" className="text-lg font-medium text-black">
            Location
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-2">
        <div className="flex-1 max-w-xs">
          <label htmlFor="type" className="text-lg font-medium text-black">
            Type
          </label>
          <select
            name="type"
            id="type"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex-1 max-w-xs">
          <label htmlFor="property" className="text-lg font-medium text-black">
            Property
          </label>
          <select
            name="property"
            id="property"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex-1 max-w-xs">
          <label htmlFor="minPrice" className="text-lg font-medium text-black">
            Min Price
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Min Price"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 max-w-xs">
          <label htmlFor="maxPrice" className="text-lg font-medium text-black">
            Max Price
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Max Price"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 max-w-xs">
          <label htmlFor="bedroom" className="text-lg font-medium text-black">
            Bedroom
          </label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="Bedroom"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 max-w-xs flex items-center">
          <button className="w-full px-3 mt-6 h-12 border-none rounded-lg bg-yellow-400 text-white flex items-center justify-center transition duration-200">
            <img src="./search.png" alt="Search" className="w-6 h-6 " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
