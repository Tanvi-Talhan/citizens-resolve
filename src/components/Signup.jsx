// import React, { useState } from 'react';



// const Signup = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [acceptedTerms, setAcceptedTerms] = useState(false);

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Add signup logic here
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-purple-500" >
//       <form className="bg-cream p-8 rounded shadow-md w-full max-w-sm" onSubmit={handleSignup}>
//         <h2 className="text-2xl mb-4 text-[#003049]">Sign Up</h2>
//         <p className="mb-4 text-center text-[#003049]">Please fill in this form to create an account!</p>
//         <div className="mb-4">
//           <label className="block text-[#003049]">First Name</label>
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-[#003049]">Last Name</label>
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-[#003049]">Email</label>
//           <input
//             type="email"
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-[#003049]">Password</label>
//           <input
//             type="password"
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-[#003049]">Confirm Password</label>
//           <input
//             type="password"
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="flex items-center text-[#003049]">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={acceptedTerms}
//               onChange={(e) => setAcceptedTerms(e.target.checked)}
//               required
//             />
//             I accept the <a href="#" className="text-blue-500">Terms of Use</a> & <a href="#" className="text-blue-500">Privacy Policy</a>.
//           </label>
//         </div>
//         <button type="submit" className="w-full bg-brown text-white p-2 rounded">Sign Up</button>
//         <p className="mt-4 text-center text-[#003049]">Already have an account? <a href="/login" className="text-blue-500">Login here.</a></p>
//       </form>
//     </div>
//   );
// };

// export default Signup;