
import "../../stylesheets/header.css";
import React, { useState } from "react";
import Signup from "../../components/main/signup";
import { Link, NavLink } from "react-router-dom";
//import { Context } from "../../Context";
//import { useContext } from "react";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [signupOpen, setSignupOpen] = useState(false);
  const currentUser = sessionStorage.getItem("user");
  // const [List, setList, loading, setLoading] =
  // useContext(Context);
  const logout = () => {
    sessionStorage.removeItem("user");
    window.location.replace("./login");
  };
  let loggedIn = false;

  const showLoggedIn = () => {
    if (currentUser) {
      return (
        <>
          <ul className="nav-item">
            <Link className="nav-link" to="/main/adminlogin">
              Admin Login
            </Link>
          </ul>
          <ul className="nav-item">
            <button onClick={logout} className="btn btn-danger">
              Logout
            </button>
          </ul>
        </>
      );
    } else {
      return (
        <>
          {/* <li className="nav-item">
                <NavLink className="nav-link" to="./login" activeClassName="active">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./signup" activeClassName="active">
                  Signup
                </NavLink>
              </li> */}
        </>
      );
    }
  };


  const showLogout = () => {
    if (loggedIn) {
      return (
        <li className="nav-item">
          <button className="btn btn-danger ms-3" aria-current="page" onClick={logout}>
            Logout
          </button>
        </li>
      );
    }}

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      // style={{ backgroundColor: themeColor }}
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/main/home">
          <div className="d-flex align-items-center">
            <img src="/logo.png" height={50} />
            {/* <h3 className="ms-2">{title}</h3> */}
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/main/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/user/browser">
                Browser Templates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/user/browser">
                Generate Boilerplate Code
              </NavLink>
            </li>
            {showLoggedIn()}
            {showLogout()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
