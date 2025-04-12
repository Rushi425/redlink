import React from "react";
import { Link } from "react-router-dom";

const BloodBanks = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-end">
        <Link to='/add-bloodbank'>
                <button Link='/add-bloodbank' className="bg-red-500 rounded-xl p-2 mt-5 mr-4 text-white hover:bg-red-600"  >Add new Blood Bank</button>
        </Link>
      </div>
      
      
      
    </div>
  );
};

export default BloodBanks;

"bg-red-500 text-white rounded-xl p-2 hover:bg-red-600 transition"