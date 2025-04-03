import React, { useState } from "react";

const DonorRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    bloodGroup: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.bloodGroup) {
      setError("All fields are required.");
      return;
    }
    // Handle registration logic (e.g., API call)
    console.log("Registering donor...", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-red-700">
          Donor Registration
        </h2>

        {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

        <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          required
        />

        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          required
        />

        <label htmlFor="bloodGroup" className="block text-gray-700 font-medium mb-1">
          Blood Group
        </label>
        <select
          id="bloodGroup"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          required
        >
          <option value="">Select your blood group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

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
