import React from "react";

const Nav = () => {
  return (
    <div className="w-full absolute top-0 ">
      <div className="w-full container flex justify-between items-center ">
        <h2 className="text-4xl font-dancing">Loom</h2>
        <ul className=" flex gap-2.5 items-center py-1.5 px-1.5 rounded-4xl bg-transparent border-1 border-gray-50 backdrop-blur-xs drop-shadow-2xl shadow-2xl">
          <li className="btn links">Home</li>
          <li className="btn links">About Us</li>
          <li className="btn links">Property</li>
          <li className="btn links">Contact Us</li>
        </ul>
        <button className="btn bg-white hover:scale-105 text-black ">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Nav;
