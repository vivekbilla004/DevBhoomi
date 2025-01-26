import React from "react";

const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: "John Doe", image: "/path-to-image1.jpg" },
    { id: 2, name: "Jane Smith", image: "/path-to-image2.jpg" },
    { id: 3, name: "Amanpreet Singh", image: "/path-to-image3.jpg" },
    { id: 4, name: "Michael Scott", image: "/path-to-image4.jpg" },
    { id: 5, name: "Dwight Schrute", image: "/path-to-image5.jpg" },
    { id: 6, name: "Pam Beesly", image: "/path-to-image6.jpg" },
  ];

  return (
    <div className="bg-black text-white py-12 px-6">
      <h3 className="text-blue-400 text-sm font-medium mb-2 text-center">Our Team</h3>
      <h2 className="text-3xl font-bold mb-6 text-center">
        Meet Our Dedicated Team of Professionals
      </h2>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        With a passion for excellence and a commitment to customer satisfaction,
        our team works tirelessly to deliver the best possible elevator
        solutions to our clients.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="rounded-2xl overflow-hidden shadow-lg max-w-xs"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="bg-gray-800 p-4 text-center">
              <h4 className="text-lg font-medium">{member.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
