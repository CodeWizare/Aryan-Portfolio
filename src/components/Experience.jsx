import React from "react";

function Experience() {
  return (
    <section className="px-8 py-12 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      <div className="bg-zinc-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold">Assistant Manager – Cake World</h3>
        <p className="text-gray-400">📍 Navi Mumbai & Panvel | May 2025 – Aug 2025</p>

        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Managed day-to-day operations across all Cake World outlets.</li>
          <li>Handled <span className="font-semibold">staff management</span>, salary processing, and resolved employee-related issues.</li>
          <li>Supervised and coordinated with shop teams to ensure smooth operations.</li>
          <li>Maintained and supported the company’s website & staff-related technical concerns.</li>
          <li>Ensured efficiency by balancing both offline operations and online presence.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
