import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold">Aryan Portfolio</h1>
      <div className="flex space-x-6">
        <Link to="/" className="cursor-pointer hover:text-red-500 transition">
          Home
        </Link>
        <Link
          to="/about"
          className="cursor-pointer hover:text-red-500 transition"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="cursor-pointer hover:text-red-500 transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
