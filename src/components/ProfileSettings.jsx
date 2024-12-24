import { useSelector } from "react-redux";
import avatar from "../imgs/avatar.png";
const ProfileSettings = () => {
  const { user } = useSelector((state) => state.state) || {};

  if (!user) return null;
  const {
    email,
    phone,
    user_metadata: { full_name, avatar_url, address, postal_code },
  } = user || {};
  return (
    <div className="flex min-h-screen flex-col rounded-lg bg-gray-50 px-4 py-8 md:flex-row md:px-8">
      {/* Main Content */}
      <main className="flex-1 rounded-lg bg-white p-6 shadow-lg md:p-8">
        {/* Profile Image Section */}
        <div className="mb-8 flex flex-col items-center">
          <img
            src={avatar_url || avatar} // صورة رمزية افتراضية
            alt="Profile"
            className="mb-4 h-32 w-32 rounded-full border-4 border-blue-500 object-cover"
          />
          <h3 className="text-xl font-bold text-gray-700">{full_name}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>

        <h3 className="mb-4 text-xl font-bold">Identification</h3>
        <p className="mb-8 text-sm text-gray-500">Verify Your Identity</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Full Name */}
          <div className="flex items-center rounded-lg bg-gray-100 p-4">
            <span className="mr-4 text-gray-400">👤</span>
            <input
              type="text"
              placeholder="Full Name"
              defaultValue={full_name}
              className="flex-1 bg-transparent text-gray-600 focus:outline-none"
            />
            <button className="text-blue-500 hover:text-blue-600">✎</button>
          </div>

          {/* Email Address */}
          <div className="flex items-center rounded-lg bg-gray-100 p-4">
            <span className="mr-4 text-gray-400">✉️</span>
            <input
              type="email"
              placeholder="E-mail Address"
              defaultValue={email}
              className="flex-1 bg-transparent text-gray-600 focus:outline-none"
            />
            <button className="text-blue-500 hover:text-blue-600">✎</button>
          </div>

          {/* Phone Number */}
          <div className="flex items-center rounded-lg bg-gray-100 p-4">
            <span className="mr-4 text-gray-400">📞</span>
            <input
              type="text"
              placeholder="Phone Number"
              defaultValue={phone}
              className="flex-1 bg-transparent text-gray-600 focus:outline-none"
            />
          </div>
          {/* Address */}
          <div className="flex items-center rounded-lg bg-gray-500 p-4">
            <span className="mr-4 text-gray-400">📍</span>
            <input
              type="text"
              placeholder="Address"
              defaultValue={address}
              disabled
              className="flex-1 bg-transparent text-gray-600 focus:outline-none disabled:bg-gray-500"
            />
            <button className="text-blue-500 hover:text-blue-600">✎</button>
          </div>

          {/* Postal Code */}
          <div className="flex items-center rounded-lg bg-gray-500 p-4">
            <span className="mr-4 text-gray-400">📮</span>
            <input
              type="text"
              placeholder="Postal Code"
              defaultValue={postal_code}
              disabled
              className="flex-1 bg-transparent text-gray-600 focus:outline-none disabled:bg-gray-500"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileSettings;
