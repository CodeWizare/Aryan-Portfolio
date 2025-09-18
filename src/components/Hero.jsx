import React from "react";

function Hero() {
  return (
    <header
      className="h-[90vh] bg-cover bg-center relative flex items-end text-white"
      style={{
        backgroundImage: `url("https://wallpapers.com/images/hd/netflix-dark-background-z9d46j4j7g1o9hzb.jpg")`,
      }}
    >
      <div className="p-12 bg-gradient-to-t from-black via-transparent w-full">
        <h1 className="text-5xl font-bold">Welcome to Aryan's Portfolio</h1>
        <p className="mt-4 max-w-xl">
          i am a passionate guy currently pursuing MCA degree from Zeal institue pune, im looking forward to work as a full stack developer in java. 
          
        </p>
        <button className="mt-6 bg-red-600 px-6 py-3 rounded font-semibold hover:bg-red-700 transition">
          View Projects
        </button>
      </div>
    </header>
  );
}

export default Hero;
