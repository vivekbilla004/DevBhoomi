import React from "react";
import Navbar from "./Navbar";

const ElevatorHero = () => {
  return (
    <div className="bg-gray-900 text-white min-h-[600px]">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-6 text-sm bg-gray-800">
        <a href="mailto:info@devbhoomielevator.com" className="text-blue-400 hover:underline">
          info@devbhoomielevator.com
        </a>
        <div className="flex items-center space-x-4">
          <a href="tel:+919717686390" className="hover:underline">
            +91 97176 86390
          </a>
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Instagram</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
        </div>
      </div>


      <Navbar/>
      {/* Header */}
      {/* <header className="flex justify-center gap-44 mx-auto my-8 rounded-xl bg- items-center px-8 py-4 text-black bg-white w-[1000px]">
       
      </header> */}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}>
        <h2 className="text-4xl md:text-5xl font-bold">Heaven of Elevators</h2>
        <p className="text-lg mt-4 max-w-3xl">
          With the experience of 9 Years from 2015 at Uttarakhand, Himachal Pradesh and all over
          the Tricity Punjab (India), we believe Heaven is a real place...!
        </p>
        <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700">
          Learn More
        </button>
      </section>
    </div>
  );
};

export default ElevatorHero;
