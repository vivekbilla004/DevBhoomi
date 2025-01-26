import React from "react";
// import { Card, CardContent } from "@/components/ui/card";

const ExperiencePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start overflow-hidden h-[600px]">
      {/* Scrolling Section */}
    

      {/* Why Choose Us Section */}
      <div className="w-full bg-white py-8 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
        <div className="max-w-4xl w-full p-6 bg-blue-500 text-white rounded-2xl my-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">01 Quality Assurance</h3>
              <p>We prioritize quality in every aspect of our operations, ensuring flawless performance and reliability in our elevators.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">02 Client-Centric Approach</h3>
              <p>Your satisfaction is our top priority. We strive to exceed your expectations with personalized service and attention to detail.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">03 Expertise and Experience</h3>
              <p>With years of experience and a team of highly skilled technicians, we have the knowledge and resources to handle any elevator project.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">04 Trusted Partner</h3>
              <p>Devbhoomi Group is a name you can trust for exceptional quality, reliability, and professionalism in elevator services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
