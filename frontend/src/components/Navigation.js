import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { GoogleButton } from "react-google-button";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { register } from "../api/index";
function NavigationBar() {
  const { logOut } = UserAuth();
  const { googleSignIn, user } = UserAuth();
  const [profile_role, setRole] = useState();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      // console.log(object);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  async function userlogin() {
    const email = user.email;
    const role = "user";
    const data = await register(email, role);
    console.log(data?.data?.data[0].role);
    setRole(data?.data?.data[0].role);
  }
  useEffect(() => {
    if (user) {
      userlogin();
    }
  }, [user]);

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container className="mb-3" fill>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
            className="bo"
          >
            CAD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="m-auto my-2"
              id="search-box"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            {/* <Navbar.Brand className="bo" onClick={() => {
              navigate("/add");
            }}>AddBlog</Navbar.Brand> */}
            <Navbar.Brand
              className="bo"
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Navbar.Brand>
            <Navbar.Brand
              className="bo"
              onClick={() => {
                navigate("/services");
              }}
            >
              Services
            </Navbar.Brand>
            <Navbar.Brand
              className="bo"
              onClick={() => {
                navigate("/allBlogs");
              }}
            >
              AllBlogs
            </Navbar.Brand>

            <Navbar.Brand
              className="bo"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </Navbar.Brand>
            {profile_role === "admin" ?( 
            <Navbar.Brand
            className="bo"
            onClick={() => {
              navigate("/Admin");
            }}
          >
            Admin
          </Navbar.Brand>
            ):
             ""
             
             }

            {user?.displayName ? (
              <div onClick={handleSignOut}>logout</div>
            ) : (
              <div>
                <div>
                  <GoogleButton onClick={handleGoogleSignIn} />
                </div>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
