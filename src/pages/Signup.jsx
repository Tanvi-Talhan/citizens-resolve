import React, { useState } from 'react';



const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-[#4c82a3]" >
      <form className="bg-cream p-8 rounded-xl shadow-md w-full max-w-sm  bg-[#003049]" onSubmit={handleSignup} >
        <h2 className="text-2xl mb-4 text-white items-center ml-28 font-extrabold">Sign Up</h2>
        <p className="mb-4 text-center text-white">Please fill in this form to create an account!</p>
        <div className="mb-4">
          <label className="block text-white">First Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Last Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              className="mr-2"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              required
            />
            I accept the <a href="#" className="text-white">Terms of Use</a> & <a href="#" className="text-white">Privacy Policy</a>.
          </label>
        </div>
        <button type="submit" className="w-44 ml-50 bg-[#4c82a3] text-white p-2 rounded font-extrabold">Sign Up</button>
        <p className="mt-4  text-white">Already have an account? <a href="/login" className="text-blue-500 font-extrabold">Login here.</a></p>
      </form>
    </div>
  );
};

export default Signup;