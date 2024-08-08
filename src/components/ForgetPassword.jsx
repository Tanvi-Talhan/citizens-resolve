import React, { useState } from 'react';


const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Add forgot password logic here
    // Example: if email not found, setError('We cannot find your email.');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#4c82a3]" >
      <div className="bg-[#003049] p-8 rounded-xl shadow-md w-full max-w-sm text-center">
        <h2 className="text-2xl mb-4 text-white font-extrabold">Forgot Password</h2>
        <p className="mb-4 text-white">Enter your email and we'll send you a link to reset your password.</p>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-2 border  border-x-gray-300 rounded mt-1"
              placeholder="youremail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <button type="submit" className="w- bg-[#4c82a3] text-white p-2 rounded">Submit</button>
        </form>
        <div className="mt-4">
          <a href="/login" className="text-blue-500 font-extrabold">Back to Login</a>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword
