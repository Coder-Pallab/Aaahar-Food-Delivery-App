import React from "react";

export default function ContactForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form className="flex flex-col gap-4 bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-200">
        
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Contact Me
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Or email me directly at{" "}
          <a
            href="mailto:duarahpallab0@gmail.com"
            className="text-primary hover:underline"
          >
            duarahpallab0@gmail.com
          </a>
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-primary transition"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-primary transition"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-primary transition"
          required
        />

        <textarea
          rows="4"
          placeholder="Type your message..."
          className="px-4 py-3 border rounded-xl outline-none resize-none focus:ring-2 focus:ring-primary transition"
          required
        ></textarea>

        <button
          type="submit"
          className="mt-2 bg-primary hover:bg-primary-dull text-white font-medium py-3 rounded-xl transition shadow-md"
        >
          Send Message
        </button>

        <a
          href="https://pallab-portfolio-updated.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center mt-2 text-primary hover:underline font-medium"
        >
          🌐 View My Portfolio
        </a>
      </form>
    </div>
  );
}
