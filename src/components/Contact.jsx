import { FaArrowRight } from "react-icons/fa6"; // Make sure this import exists
import property from "../assets/contact/property.png"; // Replace with your actual path

const Contact = () => {
  return (
    <div className="mt-8 md:mt-16 w-full pt-10 bg-gray-100 text-[#121212]">
      {/* Hero Section */}
      <div className="container mx-auto">
        <div className="relative h-[400px] text-white rounded-4xl overflow-hidden">
          <img
            src={property}
            alt="Property"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 items-center text-center px-4">
            <h2 className="uppercase text-3xl md:text-5xl font-bold leading-tight">
              Ready to make your dream property reality
            </h2>
            <button className="font-epunda flex gap-2 items-center bg-white text-[#121212] btn">
              Get Started
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-10 py-6 px-10 border-t-2 border-gray-400 gap-6">
        {/* Nav Links */}
        <ul className="flex flex-col lg:flex-row gap-4 text-center lg:text-left">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Property</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>

        {/* Contact Info */}
        <div className="flex flex-col items-center lg:items-end gap-2 text-sm text-center lg:text-right">
          <h3 className="hidden lg:block font-dancing text-3xl">Loom</h3>
          <p>1234 Maplewood Drive, Springfield, CA 90210, United States</p>
          <p>(555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
