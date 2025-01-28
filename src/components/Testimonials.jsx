import React from "react";
import bgImage from "../assets/bg.jpg"

const Testimonials = () => {
  const testimonials = [
    {
      message:
        "Devbhoomi Elevator Services has been our trusted partner for elevator maintenance in our shopping mall in Hyderabad. Their proactive approach to maintenance has helped us avoid costly downtime and ensure the safety of our visitors. We appreciate their professionalism and dedication.",
      name: "Ajmal Khan",
    },
    {
      message:
        "I highly recommend Devbhoomi Elevator Services to anyone in need of elevator installation or maintenance services in India. Their professionalism, reliability, and commitment to quality are unmatched. They are truly the best in the business.",
      name: "Anusha Rawat",
    },
    // {
    //   message:
    //     "Their service plans are flexible and affordable, making them the perfect choice for elevator maintenance. Highly recommended!",
    //   name: "Rohit Sharma",
    // },
    // {
    //   message:
    //     "Devbhoomi Elevator Services have transformed our experience with elevators. Their safety drills are excellent!",
    //   name: "Pooja Mehta",
    // },
  ];

  return (
    <div
      className="relative h-110 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('../assets/bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="max-w-6xl text-center px-4">
          {/* Section Title */}
          <h2 className="text-blue-500 text-xl font-semibold tracking-wider">
            TESTIMONIALS
          </h2>
          <h3 className="text-white text-4xl font-bold mt-2 mb-6">
            Hear it from your customers
          </h3>

          {/* Testimonial Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full sm:w-[48%] lg:w-[45%] p-6 rounded-lg shadow-lg ${
                  index % 2 === 0
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <p className="text-lg leading-relaxed">{testimonial.message}</p>
                <p className="mt-4 font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
