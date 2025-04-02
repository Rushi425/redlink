import React from "react";

const BloodSeekerRegister = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-red-700">Seeker Registration</h1>
      <form className="bg-white p-6 rounded-lg shadow-md w-80 mt-6">
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mt-2" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mt-2" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mt-2" />
        <button className="w-full bg-blue-600 text-white p-2 mt-4 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default BloodSeekerRegister;
