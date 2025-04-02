import { Link } from "react-router-dom";
import React from "react";

const BloodSeekerLogin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-red-700">Seeker Login</h1>
      <form className="bg-white p-6 rounded-lg shadow-md w-80 mt-6">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mt-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mt-2"
        />
        <button className="w-full bg-red-600 text-white p-2 mt-4 rounded hover:bg-red-700">
          Login
        </button>
        <p className="text-sm text-gray-600 mt-4 text-center">
          New here?{" "}
          <Link to="/seeker-register" className="text-blue-600 hover:underline">
            Create an Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default BloodSeekerLogin;
