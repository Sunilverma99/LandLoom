import React from "react";
import loginImage from "../../public/Login.jpg"; // Path to your image

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-24 mt-35 px-4 space-y-8 md:space-y-0 md:space-x-8">
      {/* Form Section */}
      <div className="md:w-1/2 max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-xl bg-gradient-to-r from-blue-200 via-purple-300 to-pink-500 dark:from-blue-500 dark:via-indigo-600 dark:to-pink-600">
        <h2 className="text-3xl font-bold mb-6 text-white">Sign In</h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-200"
            >
              Email or Username
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
        <img
          src={loginImage}
          alt="Login Illustration"
          className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Login;
