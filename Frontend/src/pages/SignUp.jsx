import React from "react";
import { useState } from "react";
import signupImage from "../../public/4957136.jpg"; // Path to your image
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const[username, setusername ] = useState('');
  const[ fullName, setfullName ] = useState('');
  const[ email, setEmail ] = useState('');
  const[ password, setPassword ] = useState('');
  const navigate = useNavigate();

  
  const handleSignUp = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch('http://localhost:3000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, fullName, email, password }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        toast.success('User registration successful');
        navigate('/login');
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error('An error occurred during registration');
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-12 px-4 space-y-8 md:space-y-0 md:space-x-8 ">
      {/* Form Section */}
      <div className="md:w-1/2 max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-xl bg-gradient-to-r from-blue-200 via-purple-300 to-pink-500 dark:from-blue-500 dark:via-indigo-500 dark:to-pink-600">
        <h2 className="text-3xl font-bold mb-6 text-white">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-200"
            >
              Username
            </label>
            <input
               onChange={(e) => setusername(e.target.value)}
              type="text"
              id="username"
              name="username"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="fullname"
              className="block text-sm font-semibold text-gray-200"
            >
              Full Name
            </label>
            <input
            onChange={(e) => setfullName(e.target.value)}
              type="text"
              id="fullname"
              name="fullname"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-200"
            >
              Email
            </label>
            <input
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              placeholder="Enter your email address"
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
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 text-white font-semibold rounded-md shadow-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
        <img
          src={signupImage}
          alt="Sign Up Illustration"
          className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default SignUp;
