import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-sm-12 col-md-8">
            <ul class="nav my-5">
              <li class="nav-item">
                <a
                  class="nav-link active text-dark"
                  aria-current="page"
                  href="#"
                >
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item text-dark">
                <a class="nav-link text-dark" href="#" tabindex="-1">
                  Service
                </a>
              </li>
              <li class="nav-item text-dark">
                <a class="nav-link text-dark" href="#" tabindex="-1">
                  Work
                </a>
              </li>
            </ul>
            <p>
              Rore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active text-dark size" aria-current="page" href="#">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark size" href="#">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark size" href="#">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-dark size"
                  href="#"
                  tabindex="-1"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
