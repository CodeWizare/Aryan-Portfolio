import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // 🔹 replace with your EmailJS Service ID
        "your_template_id", // 🔹 replace with your EmailJS Template ID
        form.current,
        "your_public_key"   // 🔹 replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send ❌. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-2xl w-full bg-gray-800 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mb-8">
          <a
            href="https://wa.me/919324010805"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-center font-semibold shadow-lg transition duration-300"
          >
            💬 WhatsApp Me
          </a>
          <a
            href="mailto:aryansalam49@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-center font-semibold shadow-lg transition duration-300"
          >
            📧 Send me an Email
          </a>
          <a
            href="tel:+919324010805"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl text-center font-semibold shadow-lg transition duration-300"
          >
            📞 Call Me
          </a>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-gray-700 text-white outline-none"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-gray-700 text-white outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-lg bg-gray-700 text-white outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
