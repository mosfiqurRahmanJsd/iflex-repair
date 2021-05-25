import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";
import './Book.css'

const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
  const {id} = useParams(); 

  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://young-hollows-94720.herokuapp.com/services/${id}`)
    .then(res => res.json())
    .then(data => setService(data))
  }, [id])



  const handlePaymentSuccess = paymentId => {
    const bookingsData = {
      name: loggedInUser.name, 
      email: loggedInUser.email, 
      service: service.name, 
      description: service.description, 
      photo: service.imageURL, 
      payment: 'Credit Card', 
      status: 'Pending'
    }

    
    
    const url = `https://young-hollows-94720.herokuapp.com/addBookings`; 

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      }, 
      body:JSON.stringify(bookingsData)
      
    })
    .then(res => console.log('server side response'))



  }


  
  return (
      <div className="row  w-100">
        <div className="col-md-2 p-0">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 bg-color">
            <div className="p-5 w-50">
              <h1 className="mb-3 text-primary">Book</h1>
              <h5 className="bg-white p-3 rounded">{loggedInUser.name}</h5>
              <h5 className="bg-white p-3 rounded">{loggedInUser.email}</h5>
              <h5 className="bg-white p-3 rounded">{service.name}</h5> <br />
              <p>Your Service charge will be <b>$ {service.price}</b></p>


              
              <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
              
            </div>
        </div>
      </div>
  );
};

export default Book;
