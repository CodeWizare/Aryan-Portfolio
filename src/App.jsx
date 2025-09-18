import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";
import Footer from "./components/Footer";
import Profiles from "./components/Profiles";
import Experience from "./components/Experience";

import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  // 🔹 Cartoon/Illustration Thumbnails
  const projects = [
    {
      title: "Smart Face Recognition",
      image: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png",
    },
    {
      title: "Netflix Style Portfolio",
      image: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
    },
    {
      title: "Business Intelligence Dashboard",
      image: "https://cdn-icons-png.flaticon.com/512/2972/2972517.png",
    },
    {
      title: "Cloud Project",
      image: "https://cdn-icons-png.flaticon.com/512/4144/4144781.png",
    },
  ];

  const otherWork = [
    {
      title: "Mobile App UI",
      image: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
    },
    {
      title: "Cyber Security Audit",
      image: "https://cdn-icons-png.flaticon.com/512/942/942751.png",
    },
    {
      title: "Data Visualization",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "E-commerce Platform",
      image: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
    },
  ];

  // Agar profile select nahi kiya -> Profiles screen dikhayega
  if (!selectedProfile) {
    return <Profiles onSelect={setSelectedProfile} />;
  }

  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Row title="My Top Projects" projects={projects} />
                <Row title="Other Work" projects={otherWork} />
                <Experience />
              </>
            }
          />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
