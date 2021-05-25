import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt , faCartPlus, faListAlt, faSignOutAlt, faUserPlus, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
  const [isAdmin, setIsAdmin] = useState(false); 

  useEffect(() => {
    fetch('https://young-hollows-94720.herokuapp.com/isAdmin', {
      method: 'POST', 
      headers: {"Content-Type" : "application/json"}, 
      body: JSON.stringify({email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setIsAdmin(data))
  }, [loggedInUser])


  return (
    <div
      className="sidebar d-flex flex-column justify-content-between py-5 ps-5 bg-primary"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        



        {
          isAdmin ? <div>
          <li>
          <Link to="/order-list" className="text-white d-flex align-items-center  text-decoration-none py-2">
            <FontAwesomeIcon icon={faListAlt} /><span className="ms-2">Order List</span>
          </Link>
        </li>
        <li>
          <Link to="/add-service" className="text-white d-flex align-items-center  text-decoration-none py-2">
          <FontAwesomeIcon icon={faPlus} /><span className="ms-2">Add Service</span>
          </Link>
        </li>
        <li>
          <Link to="/make-admin" className="text-white d-flex align-items-center  text-decoration-none py-2">
            <FontAwesomeIcon icon={faUserPlus} /><span className="ms-2">Make Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/manage-service" className="text-white d-flex align-items-center  text-decoration-none py-2">
            <FontAwesomeIcon icon={faThLarge} /><span className="ms-2">Manage Service</span>
          </Link>
        </li>

          </div> : 

            <div>
            <li>
          <Link to="/book" className="text-white d-flex align-items-center  text-decoration-none py-2">
            <FontAwesomeIcon icon={faCartPlus} /><span className="ms-2">Book</span>
          </Link>
        </li>
        <li>
          <Link to="/booking-list" className="text-white d-flex align-items-center  text-decoration-none py-2">
            <FontAwesomeIcon icon={faListAlt} /><span className="ms-2">BookingList</span>
          </Link>
        </li>
        <li>
          <Link to="/review" className="text-white d-flex align-items-center  text-decoration-none py-2">
            <FontAwesomeIcon icon={faCommentAlt} /><span className="ms-2">Review</span>
          </Link>
        </li>
            </div>

          

        }
        
        
      </ul>
      <div>
        <Link to="/" className="text-white d-flex align-items-center  text-decoration-none py-2">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span className="ms-2">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
