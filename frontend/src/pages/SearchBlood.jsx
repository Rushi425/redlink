import React, { useState } from "react";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const SearchBlood = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Simulated donor data
    const mockData = [
      { name: "John Doe", bloodGroup: "A+", contact: "1234567890", city: "Mumbai" },
      { name: "Jane Smith", bloodGroup: "O-", contact: "0987654321", city: "Delhi" },
      { name: "David Johnson", bloodGroup: "B+", contact: "9876543210", city: "Pune" },
    ];

    const filteredResults = mockData.filter((donor) => donor.bloodGroup === bloodGroup);
    setResults(filteredResults);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Find a Blood Donor</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center">
        <label className="text-gray-700 font-semibold mb-2">Select Blood Group</label>
        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
        >
          <option value="">-- Choose --</option>
          {bloodGroups.map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          className="w-full bg-red-600 text-white p-2 mt-4 rounded hover:bg-red-700 transition"
        >
          Search
        </button>
      </div>

      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Results</h2>
        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((donor, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-red-600">{donor.name}</h3>
                  <p className="text-gray-700">{donor.bloodGroup} - {donor.city}</p>
                  <p className="text-sm text-gray-500">📞 {donor.contact}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No donors found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBlood;
