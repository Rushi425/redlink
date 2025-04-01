import React from "react";

const Connect = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: '#',
      icon: '📘',
    },
    {
      name: 'Twitter',
      url: '#',
      icon: '🐦',
    },
    {
      name: 'Instagram',
      url: '#',
      icon: '📸',
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: '💼',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Connect With Us</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-4xl mb-2">{link.icon}</span>
              <span className="text-lg font-medium text-gray-900">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect; 