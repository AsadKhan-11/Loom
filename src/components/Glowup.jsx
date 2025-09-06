import { BiRightArrow, BiSolidRightArrow } from "react-icons/bi";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.png";
import house4 from "../assets/house4.png";
import house5 from "../assets/house5.jpg";
import { FaArrowRight } from "react-icons/fa";
import { div } from "framer-motion/client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const houses = [house1, house3, house4, house5];

const Glowup = () => {
  const [img, setImg] = useState(house1);
  return (
    <div className="bg-[#fcfcfcf6] mt-16 mb-8 ">
      <div className="text-[#121212]  container space-y-7">
        <h2 className="  text-5xl max-w-[600px] ">
          Your home deserves the glow-up too
        </h2>

        <div className="grid grid-cols-4 grid-rows-4 gap-4 font-epunda">
          <div className="relative col-span-2 row-span-4 rounded-4xl overflow-hidden h-[500px] transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.img
                key={img}
                src={img}
                alt="Image of house"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Thumbnails */}
            <div className="rounded-xl absolute z-50 right-0 bottom-0 w-auto p-2 m-3 flex gap-2.5 bg-white">
              {houses.map((house, index) => (
                <div
                  key={index}
                  onClick={() => setImg(house)}
                  className={`w-16 h-16 rounded-full border-2 cursor-pointer transition-all duration-300 overflow-hidden flex-shrink-0 ${
                    img === house
                      ? "border-blue-500 scale-110"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={house}
                    alt="images"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-start-3 col-span-1 text-center row-span-3 bg-gray-100 rounded-4xl flex flex-col items-center justify-center gap-4 py-5 px-4">
            <h3 className="text-2xl font-semibold">
              {" "}
              Great beginnings are built in humble spaces.
            </h3>
            <p className="">
              With thoughtful design and smart organization, our platform makes
              finding your next home simple and inspiring. Every detail is
              carefully crafted to help you explore.
            </p>
            <button className=" btn border-1 border-gray-200">Details</button>
          </div>
          <div className="pb-4 col-start-4 col-span-1 row-span-3 bg-gray-100 rounded-4xl flex flex-col gap-5 items-center ">
            <div className="rounded-4xl overflow-hidden ">
              <img
                src={house2}
                alt="Image of house"
                className="w-full h-full object-cover"
              />
            </div>{" "}
            <p>Pricing Start at $250K</p>
            <button className="btn bg-black text-white flex gap-1.5 items-center">
              Explore Properties <FaArrowRight />
            </button>
          </div>
          <div className="col-start-3 col-span-2 start-row-4 text-gray-700 rounded-4xl flex items-center justify-center p-3">
            We don’t just build structures — we shape lifestyles. Every project
            is a landmark of quality, innovation, and trust
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glowup;
