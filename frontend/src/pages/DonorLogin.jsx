import { Link } from "react-router-dom";
import React, { useState } from "react";

const DonorLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }
    // Handle login logic here (e.g., API call)
    console.log("Logging in...", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-red-700">Donor Login</h1>
      <form 
        className="bg-white p-6 rounded-lg shadow-md w-80 mt-6"
        onSubmit={handleSubmit}
      >
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        
        <label htmlFor="email" className="block text-gray-700 font-medium mt-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring focus:ring-red-300"
          required
        />

        <label htmlFor="password" className="block text-gray-700 font-medium mt-4">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring focus:ring-red-300"
          required
        />

        <button 
          type="submit"
          className="w-full bg-red-600 text-white p-2 mt-4 rounded hover:bg-red-700 transition duration-200"
        >
          Login
        </button>

        <p className="text-sm text-gray-600 mt-4 text-center">
          New here?{" "}
          <Link to="/donor-register" className="text-blue-600 hover:underline">
            Create an Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default DonorLogin;
