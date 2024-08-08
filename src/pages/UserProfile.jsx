import React from 'react';

function UserProfile() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <div className="flex justify-center mb-4">
            <img
              className="rounded-full h-24 w-24"
              src="https://via.placeholder.com/150"
              alt="User profile"
            />
          </div>
          <h2 className="text-center text-2xl font-semibold mb-6">My Profile</h2>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
              defaultValue="Andrew"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
              defaultValue="Turing"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Time Zone</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
              defaultValue="+5 GMT"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
              defaultValue="555-237-2384"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
              defaultValue="andrew.turing@cryptographyinc.com"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md">Cancel</button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md">Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
