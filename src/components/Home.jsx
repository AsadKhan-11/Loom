import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.png";
import house4 from "../assets/house4.png";
import house5 from "../assets/house5.jpg";
import Nav from "./Nav";
const Home = () => {
  return (
    <div
      className="h-screen  w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${house5})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Nav />
      <div className="container flex flex-col justify-end gap-5 h-full w-full">
        <ul className=" flex gap-1 items-center">
          <li className=" btn !cursor-default bg-white text-black">Houses</li>
          <li className="btn !cursor-default bg-white text-black">Apartment</li>
          <li className="btn !cursor-default bg-white text-black">
            Residential
          </li>
        </ul>
        <h1 className="text-7xl">Find where you belong</h1>

        {/* finding container */}
        <div className="bg-white text-black p-6 rounded-4xl flex flex-col ">
          <h2 className="text-4xl font-semibold pb-2">Find best place</h2>

          {/* rooms inputs */}

          <div className="flex justify-between  gap-5 pb-4 w-full ">
            <div className="rooms-container">
              <label className="rooms-label">Looking for</label>
              <input
                type="text"
                placeholder="Enter type"
                className="rooms-input"
              />
            </div>
            <div className="rooms-container">
              <label className="rooms-label">Pricing</label>
              <input
                type="number"
                placeholder="Enter Price"
                className="rooms-input"
              />
            </div>
            <div className="rooms-container">
              <label className="rooms-label">Location</label>
              <input
                type="text"
                placeholder="Location"
                className="rooms-input"
              />
            </div>
            <div className="rooms-container">
              <label className="rooms-label">Bedrooms</label>
              <input
                type="number"
                placeholder="2 Bedrooms"
                className="rooms-input"
              />
            </div>
          </div>
          {/* filter for rooms */}
          <div className="flex justify-between w-full">
            <div className="flex gap-3 ">
              <label className="rooms-label">Filters:</label>
              <button className="filter-btn">City</button>
              <button className="filter-btn">House</button>
              <button className="filter-btn">Residential</button>
              <button className="filter-btn">Apartment</button>
            </div>

            <button className="btn bg-black text-white">
              Search properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
