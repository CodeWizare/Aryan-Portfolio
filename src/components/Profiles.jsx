import React from "react";

const Profiles = ({ onSelect }) => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-10">Who’s Watching?</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* HR Manager */}
        <div
          className="group cursor-pointer"
          onClick={() => onSelect("HR Manager")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="HR Manager"
            className="w-32 h-32 rounded-md transition-transform duration-300 group-hover:scale-110 mx-auto"
          />
          <p className="text-center mt-3 text-lg">HR Manager</p>
        </div>

        {/* IT Recruiter */}
        <div
          className="group cursor-pointer"
          onClick={() => onSelect("IT Recruiter")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
            alt="IT Recruiter"
            className="w-32 h-32 rounded-md transition-transform duration-300 group-hover:scale-110 mx-auto"
          />
          <p className="text-center mt-3 text-lg">IT Recruiter</p>
        </div>

        {/* Tech Lead */}
        <div
          className="group cursor-pointer"
          onClick={() => onSelect("Tech Lead")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
            alt="Tech Lead"
            className="w-32 h-32 rounded-md transition-transform duration-300 group-hover:scale-110 mx-auto"
          />
          <p className="text-center mt-3 text-lg">Tech Lead</p>
        </div>

        {/* Hiring Manager */}
        <div
          className="group cursor-pointer"
          onClick={() => onSelect("Hiring Manager")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            alt="Hiring Manager"
            className="w-32 h-32 rounded-md transition-transform duration-300 group-hover:scale-110 mx-auto"
          />
          <p className="text-center mt-3 text-lg">Hiring Manager</p>
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-12">Developed by Aryan Salam</p>
    </div>
  );
};

export default Profiles;
