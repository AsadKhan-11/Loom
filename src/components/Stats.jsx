import React from "react";

const stats = [
  {
    text: "100%",
    subtext: "Satisfied Clients",
  },
  { text: "200+", subtext: "Properties Sold" },
  {
    text: "50+",
    subtext: "Professional Agents",
  },
  {
    text: "$10M",
    subtext: "Annual Transactions",
  },
];
const Stats = () => {
  return (
    <div className="mt-8 md:mt-16 mb-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2.5 items-center flex-1 py-6 md:py-0 ${
                index !== stats.length - 1
                  ? "md:border-r-2 border-gray-300"
                  : ""
              }`}
            >
              <h2 className="text-[#121212] font-bold text-4xl md:text-5xl">
                {stat.text}
              </h2>
              <p className="text-gray-700 text-center">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
