import React from "react";
import './Navbar.css'



const Navbar = () => {
  return (
    <div className="nav-color fixed-top">
      <nav className="navbar navbar-expand-lg container navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="img-fluid logo" src="https://i.ibb.co/jzLY7BX/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link  ms-2 active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ms-2" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ms-2" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ms-2" href="#">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ms-2" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ms-2" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ms-2" href="#">
                  Pages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
