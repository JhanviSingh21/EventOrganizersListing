import "../../stylesheets/header.css";
import React, { useState } from "react";
import Signup from "../../components/main/signup";
import { Link, NavLink } from "react-router-dom";
//import { Context } from "../../Context";
//import { useContext } from "react";
import Button from "@mui/material/Button";

const Header = () => {
  const [signupOpen, setSignupOpen] = useState(false);
  const currentUser = sessionStorage.getItem("user");
  // const [List, setList, loading, setLoading] =
  // useContext(Context);
  const logout = () => {
    sessionStorage.removeItem("user");
    window.location.replace("./login");
  };

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

  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a class="navbar-brand mt-2 mt-lg-0 src" href="/main/home">
            <h3>OrganizeEasy</h3>
          </a>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink class="nav-link" to="/main/browseorg">
                Browse Org
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/main/login">
                Login
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/main/signup">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>

        {/* <div class="d-flex align-items-center">
      
            <a class="text-reset me-3" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a> */}

        {/* <div class="dropdown">
              <a
                class="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              
            </div> */}

        {/* <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="/main/login"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              > */}
        {/* <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                /> */}
        {/* </a> */}
        {showLoggedIn()}
      </div>
      {/* </div> */}

      {/* </div> */}
    </nav>
  );
  return (
    <></>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       Cody
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavDropdown"
    //       aria-controls="navbarNavDropdown"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>

    //         <li class="nav-item">
    //           <a class="nav-link" href="/list">
    //             Browse Platform
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#pricing">
    //             Comparison
    //           </a>
    //         </li>

    //         {showLoggedIn()}

    //         <NavLink to="/signup" activeClassName="">
    //           Signup
    //         </NavLink>
    //         {signupOpen && <Signup setOpenSignup={setSignupOpen} />}
    //         <a href="/main/signup">
    //       <Button variant="contained">Get Started</Button></a>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Header;
