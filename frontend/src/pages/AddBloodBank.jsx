
import React, { useState } from "react";

const AddBloodBank = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    email: "",
    open: "",
    close: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (key !== "email" && !formData[key]) {
        setError("Please fill all required fields.");
        return;
      }
    }
    console.log("Submitting:", formData);
    setFormData({
      name: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
      email: "",
      open: "",
      close: "",
    });
    setError("");
    alert("Blood Bank added successfully!");
    // Here you would typically send the formData to your backend API 
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Add New Blood Bank</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

        <label className="block text-gray-700 font-medium">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Blood Bank Name"
          className="w-full p-2 border rounded mt-1 mb-3"
          required
        />
        <label className="block text-gray-700 font-medium">Address</label>
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Street / Area"
          className="w-full p-2 border rounded mt-1 mb-3"
          required
        />
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium">City</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 mb-3"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium">State</label>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 mb-3"
              required
            />
          </div>
        </div>

        <div className="flex gap-4">
            <div className="w-1/2">
            <label className="block text-gray-700 font-medium">Pincode</label>
            <input
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 mb-3"
            required
            />
            </div>
            <div className="w-1/2">
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 mb-3"
              required
            />
            </div>
        </div>
        <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 mb-3"
            />
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium">Opens at</label>
            <input
              type="time"
              name="open"
              value={formData.open}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 mb-3"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium">Closes at</label>
            <input
              type="time"
              name="close"
              value={formData.close}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 mb-3"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 mt-2 rounded hover:bg-red-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBloodBank;
