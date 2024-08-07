import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0">
        {/* <img src={image} alt="Background" className="object-cover w-full h-full opacity-30" /> */}
      </div>
      <form onSubmit={handleSubmit} className="bg-[#fdf0d5] p-6 rounded shadow-md w-80 z-10"> 
        <h2 className="text-2xl mb-4 text-[#003049]">Login</h2>
        <div className="mb-4">
          <label className="block mb-1 text-[#003049]">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-300 p-2 rounded outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-[#003049]">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-gray-300 p-2 rounded outline-none focus:border-blue-400"
          />
        </div>
        <button type="submit" className="w-full bg-[#003049] text-white py-2 rounded hover:bg-[#003049]">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login ;

