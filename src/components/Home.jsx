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
    </div>
  );
};

export default Home;
