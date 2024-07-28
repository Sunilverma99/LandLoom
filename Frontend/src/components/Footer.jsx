import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container px-6 py-6 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Subscribe us to get an update.
            </h1>
            <div className="flex flex-col mx-auto mt-4 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-black transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-yellow-300 rounded-lg hover:bg-yellow-600 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Home
              </p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                About Us
              </p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Our Philosophy
              </p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Properties
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Buy and Sell
              </p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"></p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Explore Properties
              </p>
            </div>
          </div>
        </div>

        <hr className=" border-gray-200 my-2 dark:border-gray-700 h-2" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-2 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="130"
              height="110"
              alt=""
            />
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width="130"
              height="110"
              alt=""
            />
          </div>

          <div className="flex gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width="30"
              height="30"
              alt="fb"
            />
            <img
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="30"
              height="30"
              alt="tw"
            />
            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="30"
              height="30"
              alt="inst"
            />
            <img
              src="https://www.svgrepo.com/show/94698/github.svg"
              width="30"
              height="30"
              alt="gt"
            />
            <img
              src="https://www.svgrepo.com/show/22037/path.svg"
              width="30"
              height="30"
              alt="pn"
            />
            <img
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="30"
              height="30"
              alt="in"
            />
            <img
              src="https://www.svgrepo.com/show/22048/dribbble.svg"
              width="30"
              height="30"
              alt="db"
            />
          </div>
        </div>
        <p className="font-sans p-2 text-start md:text-center md:text-lg md:p-4">
          © 2024 LandLoom Company Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
