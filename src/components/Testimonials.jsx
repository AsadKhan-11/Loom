import React, { useState } from "react";
import Person1 from "../assets/testimonials/Person1.png";
import Person2 from "../assets/testimonials/Person2.png";
import Person3 from "../assets/testimonials/Person3.png";
import Person4 from "../assets/testimonials/Person4.png";
import People1 from "../assets/testimonials/people/people1.png";
import People2 from "../assets/testimonials/people/people2.png";
import People3 from "../assets/testimonials/people/people3.png";
import People4 from "../assets/testimonials/people/people4.png";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const images = [Person1, Person2, Person3, Person4];

const testimonials = [
  {
    image: People1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    review:
      "This agency helped me find my dream home quickly and easily. Highly recommended!",
  },
  {
    image: People2,
    name: "Michael Lee",
    role: "Investor",
    review:
      "Professional service and a great selection of properties. A great experience overall!",
  },
  {
    image: People3,
    name: "Aisha Khan",
    role: "Tenant",
    review:
      "Smooth process from start to finish. The team was very helpful and responsive.",
  },
  {
    image: People4,
    name: "Carlos Ramirez",
    role: "Seller",
    review:
      "They sold my home in just two weeks! I couldn't be happier with the outcome.",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const nextTestimonial = () => {
    setDirection(1); // forward
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1); // backward
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const current = testimonials[index];

  return (
    <div className="mt-8 md:mt-16 mb-8 w-full">
      <div className="text-[#121212]  container space-y-7">
        <div className="flex justify-between items-center">
          <h2 className="  text-5xl max-w-[600px] pb-6 ">
            What our clients say about us
          </h2>

          <div className="lg:flex items-center gap-3 hidden ">
            {images.map((image, index) => (
              <div
                key={index}
                className="rounded-full overflow-hidden h-15 w-15 border-2 border-white -ml-8 "
              >
                <img
                  src={image}
                  alt={`image${index}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            More than 500+ Client Reviews
          </div>
        </div>

        <div className="flex justify-between items-center rounded-4xl">
          <button onClick={prevTestimonial} className="arr-btn">
            <FaArrowLeft size={20} />
          </button>

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-[70%] bg-gray-100 rounded-2xl p-6 md:p-10 shadow-lg max-w-3xl mx-auto text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="h-20 w-20 rounded-full object-cover object-top"
                />
              </div>
              <p className="text-lg text-gray-800 mb-4 italic">
                "{current.review}"
              </p>
              <h4 className="text-xl font-semibold">{current.name}</h4>
              <p className="text-sm text-gray-500">{current.role}</p>
            </motion.div>
          </AnimatePresence>

          <button onClick={nextTestimonial} className="arr-btn">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
