import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-red-700 text-center mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 text-center mb-6">We would love to hear from you!</p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Your Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Phone Number</label>
            <input 
              type="tel" 
              placeholder="Enter your phone number" 
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Your Message</label>
            <textarea 
              placeholder="Type your message here..." 
              className="w-full mt-1 px-3 py-2 border rounded-md h-28 focus:outline-none focus:ring-2 focus:ring-red-500"
              required 
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
