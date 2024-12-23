import React from "react";

const ProfileSettings = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row px-4 md:px-8 py-8">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white shadow-lg p-4 mb-4 md:mb-0">
        <h2 className="text-xl font-bold mb-6">Account</h2>
        <ul className="space-y-6">
          <li className="flex items-center text-blue-600 cursor-pointer text-lg">
            <span className="mr-2">📄</span>
            Personal Data
          </li>
          <li className="flex items-center text-red-500 cursor-pointer hover:text-red-600 text-lg">
            <span className="mr-2">🚪</span>
            Logout
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white shadow-lg p-6 md:p-8">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://via.placeholder.com/150" // صورة رمزية افتراضية
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
          />
          <h3 className="text-xl font-bold text-gray-700">Mohammed</h3>
          <p className="text-sm text-gray-500">mohammed@text.com</p>
        </div>

        <h3 className="text-xl font-bold mb-4">Identification</h3>
        <p className="text-sm text-gray-500 mb-8">Verify Your Identity</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex items-center bg-gray-100 rounded-lg p-4">
            <span className="text-gray-400 mr-4">👤</span>
            <input
              type="text"
              placeholder="Full Name"
              defaultValue="Mohammed"
              className="bg-transparent flex-1 text-gray-600 focus:outline-none"
            />
            <button className="text-blue-500 hover:text-blue-600">
              ✎
            </button>
          </div>

          {/* Email Address */}
          <div className="flex items-center bg-gray-100 rounded-lg p-4">
            <span className="text-gray-400 mr-4">✉️</span>
            <input
              type="email"
              placeholder="E-mail Address"
              defaultValue="mohammed@text.com"
              className="bg-transparent flex-1 text-gray-600 focus:outline-none"
            />
            <button className="text-blue-500 hover:text-blue-600">
              ✎
            </button>
          </div>

          {/* Phone Number */}
          <div className="flex items-center bg-gray-100 rounded-lg p-4">
            <span className="text-gray-400 mr-4">📞</span>
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent flex-1 text-gray-600 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-gray-100 rounded-lg p-4">
            <span className="text-gray-400 mr-4">🔑</span>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent flex-1 text-gray-600 focus:outline-none"
            />
          </div>

          {/* Address */}
          <div className="flex items-center bg-gray-100 rounded-lg p-4">
            <span className="text-gray-400 mr-4">📍</span>
            <input
              type="text"
              placeholder="Address"
              className="bg-transparent flex-1 text-gray-600 focus:outline-none"
            />
            <button className="text-blue-500 hover:text-blue-600">
              ✎
            </button>
          </div>

          {/* Postal Code */}
          <div className="flex items-center bg-gray-100 rounded-lg p-4">
            <span className="text-gray-400 mr-4">📮</span>
            <input
              type="text"
              placeholder="Postal Code"
              className="bg-transparent flex-1 text-gray-600 focus:outline-none"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileSettings;
