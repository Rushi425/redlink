import React from "react";

const DonorRegister = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Donor Registration</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Blood Group"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default DonorRegister;