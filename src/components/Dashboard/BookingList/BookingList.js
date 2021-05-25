import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const BookingList = () => {
  const [orderList, setOrderList] = useState([]); 
  const [loggedInUser, setLoggedInUser] = useContext(UserContext); 

  useEffect(() => {
    fetch('https://young-hollows-94720.herokuapp.com/bookings?email='+loggedInUser.email)
    .then(res => res.json())
    .then(data => setOrderList(data))

  }, [loggedInUser])



  return (
    <div className="row w-100">
        <div className="col-md-2 p-0">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 bg-color">
            <div className="p-5">
              <h1 className="mb-3 text-primary">Booking List</h1>
              
            <div className="row">
            {
               orderList.map(data => (

                <div className="col-md-4 mb-3">
                  <div className="p-3 border rounded">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src={data.photo} alt="" className="w-25" />
                    <h6 className="bg-warning text-light p-2 rounded">{data.status}</h6>
                  </div>
                  <h4>{data.service}</h4>
                  <p>{data.description}</p>
                  </div>
                </div>




               ))
             }
            </div>
            </div>
        </div>
      </div>
  );
};

export default BookingList;
