import React from "react";

import house5 from "../assets/house5.jpg";
import Nav from "./Nav";
const Home = () => {
  const filters = ["City", "House", "Residential", "Apartment"];

  const fields = [
    { label: "Looking for", type: "text", placeholder: "Enter type" },
    { label: "Pricing", type: "number", placeholder: "Enter Price" },
    { label: "Location", type: "text", placeholder: "Location" },
    { label: "Bedrooms", type: "number", placeholder: "2 Bedrooms" },
  ];

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

          <div className="flex flex-wrap gap-5 pb-4 w-full">
            {fields.map((f, i) => (
              <div key={i} className="rooms-container min-w-[200px] flex-1">
                <label className="rooms-label">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="rooms-input"
                />
              </div>
            ))}
          </div>

          {/* filter for rooms */}
          <div className="flex justify-between w-full flex-wrap">
            <div className="flex gap-3 flex-wrap">
              <label className="rooms-label">Filters:</label>
              {filters.map((filter, i) => (
                <button key={i} className="filter-btn">
                  {filter}
                </button>
              ))}
            </div>

            <button className="btn bg-black text-white mt-3 md:mt-0">
              Search properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
