import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

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
    {
      message:
        "Their service plans are flexible and affordable, making them the perfect choice for elevator maintenance. Highly recommended!",
      name: "Rohit Sharma",
    },
    {
      message:
        "Devbhoomi Elevator Services have transformed our experience with elevators. Their safety drills are excellent!",
      name: "Pooja Mehta",
    },
  ];

  return (
    <div
      className="relative h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('your-background-image.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

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

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={2} // Display two cards at a time
            navigation
            pagination={{ clickable: true }}
            className="pb-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`p-6 rounded-lg shadow-lg ${
                    index % 2 === 0
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <p className="text-lg leading-relaxed">
                    {testimonial.message}
                  </p>
                  <p className="mt-4 font-semibold">{testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
