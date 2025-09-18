import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Smart Face Recognition Attendance",
      desc: "AI powered system for attendance with Streamlit UI.",
    },
    {
      title: "Netflix Style Portfolio",
      desc: "Modern interactive website inspired by Netflix UI.",
    },
    {
      title: "Business Intelligence Dashboard",
      desc: "Interactive charts and insights using MS BI & Chart.js.",
    },
  ];

  return (
    <section id="projects" className="py-16 px-8 bg-zinc-900 text-center">
      <h2 className="text-4xl font-bold text-red-500 mb-10">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projectList.map((p, i) => (
          <div key={i} className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
