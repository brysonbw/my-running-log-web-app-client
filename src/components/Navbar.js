import React, { useState, useContext } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { auth, logout } = useContext(AuthContext)

    
    return (
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex justify-start">
                  <img
                    className="h-8 w-8"
                    src="https://cdn-icons-png.flaticon.com/512/1248/1248287.png"
                    alt="logo-running-man"
                  />
                  <p className="logo-name text-white px-3 py-2 rounded-md text-sm font-medium">My Running Log</p>
                </div>
                <div className=" hidden md:block absolute right-5">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {auth.isLoggedIn && (
                    <Link
                      to="/"
                      className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                     )}
                    {!auth.isLoggedIn ? (
                      <>
                    <Link
                      to="/login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
  
                    <Link
                      to="/signup"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Sign Up
                    </Link>
                    </>
                      ) : (
                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"onClick={logout}>Logout</button> 
                      )}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={React.createRef()} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {auth.isLoggedIn && (
                    <Link
                      to="/"
                      className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                     )}
                  {!auth.isLoggedIn ? (
                    <>
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Login
                  </Link>
  
                  <Link
                    to="/signup"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Sign Up
                  </Link>
                  </>
                    ) : (
                      <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"onClick={logout}>Logout</button> 
                       )}
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    );
  }
  

export default Navbar
