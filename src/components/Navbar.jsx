import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-center gap-44 rounded-lg bg-white  items-center px-8 py-4 bg-gray-800 text-black w-[900px] mx-auto my-4">
      <div className="flex items-center space-x-3">
        <img src="/path-to-logo.png" alt="Logo" className="h-12" />
        <h1 className="text-lg font-bold">DEVBHOOMI ELEVATORS</h1>
      </div>
      <nav className="flex items-center space-x-6 text-sm">
        <NavLink to="/Home" className="hover:underline" end>
          Home
        </NavLink>
        <NavLink to="/Aboutus" className="hover:underline">
          About
        </NavLink>
        <NavLink to="/Services" className="hover:underline">
          Services
        </NavLink>
        <NavLink to="/Contactus" className="hover:underline">
          Contact Us
        </NavLink>
        <NavLink to="/get-started" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
