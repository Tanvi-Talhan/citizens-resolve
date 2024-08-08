import React from 'react';

function UserProfile() {
  return (
    <>
      <div className="min-h-screen bg-[#4c82a3] flex justify-center items-center">
        <div className=" bg-[#003049] p-8 rounded-lg shadow-md w-full max-w-lg">
          <div className="flex justify-center mb-4">
            <img
              className="rounded-full h-24 w-24"
              src=''
              alt="User profile"
            />
          </div>
          <h2 className="text-center  text-white  text-2xl font-extrabold mb-6">My Profile</h2>
          <div className="mb-4">
            <label className="block text-white">First Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
              defaultValue="Samiksha"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-white">Last Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
              defaultValue="Mogre"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-white">Time Zone</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
              defaultValue="+5 GMT"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-white">Phone</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
              defaultValue="555-237-2384"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-white">Email Address</label>
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
