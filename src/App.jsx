


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WelcomePage from "./components/WelcomePage";  
// import SignupPage from "./components/SignupPage";  
// import SignIn from "./components/SignInPage";
// import Dashboard from "./components/dashboard";  
// import ForgotPassword from "./components/ForgotPassword";
// import CreateBlog from "./components/CreateBlog";
// import MyBlogs from "./components/MyBlogs"; // Import MyBlogs
// import BlogDetails from "./components/BlogDetails"; // <-- Import BlogDetails
// import ViewBlog from "./components/ViewBlog"; // Import View Blogs
// import ViewDetails from "./components/ViewDetails";



// function App() { 
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<WelcomePage/>} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/create-blog" element={<CreateBlog />} />
//         <Route path="/my-blogs" element={<MyBlogs />} /> 
//         <Route path="/blog/:id" element={<BlogDetails />} /> {/* used to view the detailed version of the blog */}
//         <Route path="/view-blog" element={<ViewBlog />} />
//         <Route path="/view/:id" element={<ViewDetails />} /> 
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";  
import Dashboard from "./components/dashboard";  
import ForgotPassword from "./components/ForgotPassword";
import CreateBlog from "./components/CreateBlog";
import MyBlogs from "./components/MyBlogs"; // Import MyBlogs
import BlogDetails from "./components/BlogDetails"; // <-- Import BlogDetails
import ViewBlog from "./components/ViewBlog"; // Import View Blogs
import ViewDetails from "./components/ViewDetails";



function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/my-blogs" element={<MyBlogs />} /> 
        <Route path="/blog/:id" element={<BlogDetails />} /> {/* used to view the detailed version of the blog */}
        <Route path="/view-blog" element={<ViewBlog />} />
        <Route path="/view/:id" element={<ViewDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
