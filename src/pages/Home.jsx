import React from "react";

const Home = () => {
  const donationConditions = [
    {
      title: "Age Requirement",
      description: "Donors must be between 18 and 65 years old.",
    },
    {
      title: "Weight Requirement",
      description: "Minimum weight of 50kg is required to donate blood.",
    },
    {
      title: "Health Status",
      description: "Donors must be in good health and free from any infections.",
    },
    {
      title: "Time Gap",
      description: "Wait at least 56 days between blood donations.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Donate Blood, Save Lives
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Join our community of blood donors and make a difference in
            someone's life today.
          </p>
        </div>
      </div>

      {/* Donation Conditions */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Blood Donation Requirements
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {donationConditions.map((condition, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {condition.title}
              </h3>
              <p className="text-gray-600">{condition.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to make a difference?</span>
            <span className="block text-primary">Start donating today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/user/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-red-700"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
