import React from "react";

function Row({ title, projects }) {
  return (
    <section className="px-8 py-6">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {projects.map((p, i) => (
          <div
            key={i}
            className="min-w-[200px] h-[300px] bg-zinc-800 rounded-lg overflow-hidden relative group cursor-pointer"
          >
            {/* Project Image */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Project Title */}
            <div className="absolute bottom-2 left-2 right-2 text-center">
              <p className="text-white text-sm font-semibold drop-shadow-lg">
                {p.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Row;
