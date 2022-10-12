import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navigation";
import Protected from "./components/Protected";
import ProtectedAdmin from "./components/ProtectedAdmin";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home.js";
// import AddBlog from "./pages/AddBlog";
import Contact from "./pages/Contact";
import AllBlogs from "./pages/AllBlogs";
import ReadMore from "./pages/ReadMore";
import About from "./pages/About";
import Services from "./pages/Services";
import Admin from "./pages//Admin";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/add" element={<AddBlog />} /> */}
          {/* <Route path='/allBlogs' element={<RichtextEditor/>} /> */}

          {/* <Route
            path="/add"
            element={
              <Protected>
                <AddBlog />
              </Protected>
            }
          /> */}
          <Route path="/allBlogs" element={<AllBlogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          <Route path="/more" element={<ReadMore />} />
          <Route path="/Admin" element={<Protected>
            <ProtectedAdmin>

            <Admin />
            </ProtectedAdmin>
          </Protected>} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
