import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
const Glowup = () => {
  return (
    <div className="bg-[#fcfcfcf6] mt-16 mb-8 ">
      <div className="text-[#121212]  container space-y-7">
        <h2 className="  text-5xl max-w-[600px] ">
          Your home deserves the glow-up too
        </h2>

        <div className="grid grid-cols-4 grid-rows-4 gap-4 font-epunda">
          <div className="col-span-2 row-span-4 rounded-4xl overflow-hidden">
            <img
              src={house1}
              alt="Image of house"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-3 col-span-1 text-center row-span-3 bg-gray-200 rounded-4xl flex flex-col items-center justify-center gap-4 py-5 px-4">
            <h3 className="text-2xl font-semibold">
              {" "}
              Great beginnings are built in humble spaces.
            </h3>
            <p className="">
              With thoughtful design and smart organization, our platform makes
              finding your next home simple and inspiring. Every detail is
              carefully crafted to help you explore.
            </p>
            <button className="">Details</button>
          </div>
          <div className="col-start-4 col-span-1 row-span-3 bg-gray-200 rounded-4xl flex flex-col items-center ">
            <div className="rounded-4xl overflow-hidden">
              <img
                src={house2}
                alt="Image of house"
                className="w-full h-full object-cover"
              />
              <p>Pricing Start at $250K</p>
            </div>{" "}
          </div>
          <div className="col-start-3 col-span-2 start-row-4 text-gray-400 rounded-4xl flex items-center justify-center p-3">
            rounded-4xlrounded-4xlrounded-4xlrounded-4xlrounded-4xlrounded-4xlrounded-4xlrounded-4xlrounded-4xlrounded-4xlrounded-4xlrounded-4xlrounded-4xl
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glowup;
