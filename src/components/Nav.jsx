import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full absolute top-0 ">
      <div className="w-full container flex justify-between items-center ">
        <h2 className="text-4xl font-dancing">Loom</h2>
        <ul className="hidden lg:flex gap-2.5 items-center py-1.5 px-1.5 rounded-4xl bg-transparent border-1 border-gray-50 backdrop-blur-xs drop-shadow-2xl shadow-2xl">
          <li className="btn links">Home</li>
          <li className="btn links">About Us</li>
          <li className="btn links">Property</li>
          <li className="btn links">Contact Us</li>
        </ul>
        <button className="hidden lg:block btn bg-white hover:scale-105 text-black ">
          Sign up
        </button>

        {/* Mobile  View */}

        <div className="lg:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="z-50 absolute top-0 left-0 w-full h-screen flex space-y-6 flex-col items-center justify-center  bg-black/90 text-white p-8 pb-14 transition-all duration-200">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl cursor-pointer hover:text-red-600 transition-colors duration-300"
            >
              <CgClose />
            </button>

            <ul className="flex flex-col items-center space-y-6 text-xl mt-16">
              <li className=" transition-all duration-300 cursor-pointer  text-center">
                <a href="#home"> Home </a>
              </li>
              <li className=" transition-all duration-300 cursor-pointer  text-center">
                <a href="#about"> About Us </a>
              </li>
              <li className=" transition-all duration-300 cursor-pointer  text-center">
                <a href="#property"> Property </a>
              </li>
              <li className=" transition-all duration-300 cursor-pointer  text-center">
                <a href="#contact"> Contact Us</a>
              </li>
            </ul>
            <a href="#sign">
              <button className="btn bg-white text-black  mt-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-red-700 hover:scale-105 hover:cursor-pointer transform transition duration-300">
                Sign up{" "}
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
