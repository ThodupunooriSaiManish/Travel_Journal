// import React, { useState } from "react";
// import { Link } from "react-router-dom";  

// const SignupPage = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);

//     // Validate password (at least one special character and one number)
//     const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
//     const numberRegex = /[0-9]/;
    
//     if (!specialCharRegex.test(newPassword) || !numberRegex.test(newPassword)) {
//       setPasswordError("Password must contain at least one special character and one number.");
//     } else {
//       setPasswordError(""); // Remove error when valid
//     }
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     if (password !== e.target.value) {
//       setError("Passwords do not match!");
//     } else {
//       setError(""); // Remove error when they match
//     }
//   };

//   return (
//     <div className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center backdrop-blur-lg"
//       style={{ backgroundImage: "url('../../public/images/bg2.jpg')" }}
//     >
//       {/* App Name in Top Left */}
//       <div className="absolute top-4 left-4">
//         <Link to="/" 
//           className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-red-400  hover:scale-105 transition-all duration-300"
//         >Travel Journal</Link>
//       </div>

//       <div className="bg-white-0 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        
//         <form>
//           <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" />
//           <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
//           <input type="phone" placeholder="Phone Number" className="w-full p-2 mb-4 border rounded" />
//           <input type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" value={password}
//             onChange={handlePasswordChange}
//           />
          
//           {/* Show password validation error */}
//           {passwordError && <p className="text-red-500 text-sm mb-2">{passwordError}</p>}
          
//           <input type="password" placeholder="Confirm Password" className="w-full p-2 mb-2 border rounded"value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//           />

//           {/* Show error message if passwords don't match */}
//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
//         </form>

//         {/* Redirect to Sign In Page */}
//         <p className="text-center mt-4 text-gray-600">
//           <strong>Already have an account?</strong>{" "}
//           <Link to="/signin" className="text-white font-bold hover:underline">Sign In</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from '../../public/images/logo.jpg';

const SignupPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;

    if (!specialCharRegex.test(newPassword) || !numberRegex.test(newPassword)) {
      setPasswordError("Password must contain at least one special character and one number.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setError("Passwords do not match!");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Sign Up Successful!");
    }, 2000);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center backdrop-blur-lg"
      style={{ backgroundImage: "url('../../public/images/bg2.jpg')" }}
    >
      {/* App Name in Top Left */}
       <div className="absolute top-4 left-4">
         <Link to="/" 
           className="text-3xl font-extrabold flex gap-4 items-center"
         > <img src={image} alt="Logo" className="w-18 h-18 object-contain mb rounded-md"
         />Travel Journal</Link>
       </div>
      <div className="backdrop-blur-3xl p-8 rounded-xl shadow-black shadow-2xl w-96 ">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" required />
          <input type="phone" placeholder="Phone Number" className="w-full p-2 mb-4 border rounded" required />

          <div className="relative">
            <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-2 mb-2 border rounded"
              value={password} onChange={handlePasswordChange} required />
            <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {passwordError && <p className="text-red-500 text-sm mb-2">{passwordError}</p>}

          <div className="relative">
            <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="w-full p-2 mb-2 border rounded"
              value={confirmPassword} onChange={handleConfirmPasswordChange} required />
            <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center"
            disabled={loading}>
            {loading ? "⏳ Signing Up..." : "Submit"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          <strong>Already have an account?</strong>{" "}
          <Link to="/signin" className="text-white font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
