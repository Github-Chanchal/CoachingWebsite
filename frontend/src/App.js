import React from "react";
import { Route, Routes,} from "react-router-dom";
import { Link } from 'react-router-dom';
import Navbar from "./components/Navigation";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account.js";
import Home from "./pages/Home.js";
import AddBlog from "./pages/AddBlog";
import Contact from "./pages/Contact";
import AllBlogs from "./pages/AllBlogs";
import ReadMore from "./pages/ReadMore";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/add" element={<AddBlog />} /> */}
          {/* <Route path='/allBlogs' element={<RichtextEditor/>} /> */}
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route
            path="/add"
            element={
              <Protected>
                <AddBlog />
              </Protected>
            }
          />
          <Route
            path="/allBlogs"
            element={
              <Protected>
                <AllBlogs/>
              </Protected>
            }
          />

<Route
            path="/more"
            element={
              <Protected>
                <ReadMore/>
              </Protected>
            
            }
          />
          

          <Route
            path="/contact"
            element={
              <Protected>
                <Contact/>
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
