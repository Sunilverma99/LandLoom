import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { set } from "mongoose";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
    useEffect(() => {

      if (user) {
        setIsLoggedIn(true);
        console.log(user)
      }
    }, [user]);
  useEffect(() => {
    // Close dropdown if click is outside of it
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignIn = () => {
    // Navigate to login page
    navigate("/login");
  };
  const handleSignUp = () => {
    // Navigate to login page
    navigate("/signup");
  };
  const handleSignOut = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${localStorage.getItem("token")}` 
        },
      });
  
      if (response.ok) {
        const parseRes = await response.json();
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        dispatch(setUser(null));
        navigate("/login");
      } else {
        console.error("Logout failed:", await response.text());
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };
  

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 border-b border-gray-200 dark:border-gray-700 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img
            src="logo.svg"
            className="h-8"
            alt="Logo"
          /> */}
          <span className="self-center text-2xl font-semibold text-white dark:text-white">
            <img src="./LandLoomLogo.png" className="rounded-lg h-10" alt="" />
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          {isLoggedIn ? (
            <>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded={isDropdownOpen}
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="user photo"
                />
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute  text-base mt-48 list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                  ref={dropdownRef}
                >
                  <div className="px-4 py-5">
                    <span className="block text-sm text-gray-900 dark:text-white">
                     { user.fullName}
                    </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                     {user.email}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                   
                    <li>
                      <a
                      onClick={handleSignOut}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleSignIn} // Simulate login and navigate
              >
                Sign In
              </button>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                onClick={handleSignUp} // Simulate login and navigate
              >
                Sign Up
              </button>
            </>
          )}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isNavbarOpen}
            onClick={() => setNavbarOpen(!isNavbarOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isNavbarOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-yellow-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-yellow-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-yellow-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/list"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-yellow-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-yellow-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
