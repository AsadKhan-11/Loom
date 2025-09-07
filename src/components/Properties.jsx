import { div } from "framer-motion/client";
import house1 from "../assets/properties/house1.png";
import house2 from "../assets/properties/house2.png";
import house3 from "../assets/properties/house3.png";
import house4 from "../assets/properties/house4.png";
import house5 from "../assets/properties/house5.png";
import house6 from "../assets/properties/house6.png";
import { FaArrowRight } from "react-icons/fa";

const properties = [
  {
    img: house1,
    title: "Modern Family Home",
    bedrooms: "3",
    price: "$450K",
    street: "123 Maple Street",
    sale: "sold",
  },
  {
    img: house2,
    title: "Luxury City Apartment",
    bedrooms: "1",
    price: "$600K",
    street: "456 Oak Avenue",
    sale: "no sale",
  },
  {
    img: house3,
    title: "Cozy Suburban Cottage",
    bedrooms: "2",
    price: "$380K",
    street: "789 Pine Lane",
    sale: "no sale",
  },
  {
    img: house4,
    title: "Spacious Country Villa",
    bedrooms: "4",
    price: "$750K",
    street: "321 Birch Road",
    sale: "sold",
  },
  {
    img: house5,
    title: "Chic Downtown Loft",
    bedrooms: "4",
    price: "$520K",
    street: "654 Cedar Boulevard",
    sale: "sold",
  },
  {
    img: house6,
    title: "Elegant Lakeside Estate",
    bedrooms: "5",
    price: "$1.2M",
    street: "987 Lakeview Drive",
    sale: "for sale",
  },
];

const Properties = () => {
  return (
    <div className="mt-8 md:mt-16 mb-8 w-full">
      <div className="container">
        <h2 className=" text-[#121212]  text-5xl max-w-[600px] pb-4 ">
          Explore our premium houses
        </h2>

        <div className="flex w-full justify-between">
          <p className=" text-gray-700 max-w-[500px]">
            Discover luxury living with our handpicked selection of high-end
            homes tailored to your lifestyle.
          </p>
          <button className="btn bg-black flex items-center gap-3 ">
            See all properties <FaArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mt-8 font-epunda">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <div className="absolute top-0 left-0 m-4 w-[70px] text-center rounded-4xl text-black text-sm bg-white py-1 px-2 ">
                  {property.sale}
                </div>

                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col gap-4 ">
                <p className="text-gray-600 mb-1">
                  Bedrooms {property.bedrooms}
                </p>
                <h3 className="text-xl font-semibold text-[#121212] mb-2">
                  {property.title}
                </h3>
                <div className="flex gap-4 items-center">
                  <p className="text-black font-bold">{property.price}</p>
                  <p className="text-gray-500 mb-1">{property.street}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
