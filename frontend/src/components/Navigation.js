import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { GoogleButton } from "react-google-button";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function NavigationBar() {
  const { logOut } = UserAuth();
  const { googleSignIn, user } = UserAuth();
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

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" >
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
            <Navbar.Brand className="bo" onClick={() => {
              navigate("/add");
            }}>AddBlog</Navbar.Brand>
            <Navbar.Brand className="bo" onClick={() => {
              navigate("/allBlogs");
            }}>AllBlogs</Navbar.Brand>
            <Navbar.Brand className="bo" onClick={() => {
              navigate("/account");
            }}>Account</Navbar.Brand> 
            <Navbar.Brand className="bo" onClick={() => {
              navigate("/contact");
            }}>Contact</Navbar.Brand> 
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
