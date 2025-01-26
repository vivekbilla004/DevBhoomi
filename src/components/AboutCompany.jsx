import React from "react";

const AboutCompany = () => {
  return (
    <section className="bg-white py-16 min-h-[600px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-16">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h4 className="text-blue-500 uppercase text-sm font-bold mb-4">About Company</h4>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Welcome to Devbhoomi Group - Your Trusted Partner in Elevators Solutions
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            With a commitment to excellence and innovation, we specialize in
            providing high-quality elevators and comprehensive maintenance services across various sectors. 
            Our dedication to quality, safety, and client satisfaction sets us apart as a leader in the industry.
          </p>
          <div className="flex items-center gap-12">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-900">25+</h3>
              <p className="text-gray-600 text-sm">Years of Experience</p>
            </div>
            <div className="border-l border-gray-300 h-16"></div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-900">1,250</h3>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
          </div>
          <button className="mt-8 bg-blue-600 px-6 py-3 text-white rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="/path-to-image.jpg"
            alt="Elevator Building"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
