import React from "react";
import List from "../components/List";

const UserProperty = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-blue-500 to-purple-600 p-10 lg:p-16">
      {/* User Info Section */}
      <div className="flex-1 bg-gray-700 p-8 lg:p-12 rounded-xl shadow-xl mb-6 lg:mb-0 lg:mr-6 transition-transform transform hover:scale-105 hover:shadow-xl">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
              User Information
            </h1>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
              Update Profile
            </button>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <span className="text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300">
                Avatar:
              </span>
              <img
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-gradient-to-r from-blue-400 to-indigo-400 shadow-lg"
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User Avatar"
              />
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-lg lg:text-xl">
              <div className="mb-4">
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Username:
                </span>{" "}
                <span className="text-gray-900 dark:text-gray-100">Nitin</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  E-mail:
                </span>{" "}
                <span className="text-gray-900 dark:text-gray-100">
                  nitin@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
              My List
            </h1>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
              Create New Post
            </button>
          </div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default UserProperty;
