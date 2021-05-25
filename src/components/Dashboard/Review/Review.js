import React, { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Review.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const onSubmit = data => {
    const reviewData = {
      name: data.name, 
      company: data.company, 
      description: data.description,
      imageURL : loggedInUser.photo
    }
    
    const url = `https://young-hollows-94720.herokuapp.com/addReview`; 

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      }, 
      body:JSON.stringify(reviewData)
      
    })
    .then(res => console.log('server side response'))

  };

  
  

  return (
    <div className="row w-100">
      <div className="col-md-2 p-0">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 bg-color">
        <div className="p-5">
          <h1 className="mb-3 text-primary">Add Review</h1>
        

          <form onSubmit={handleSubmit(onSubmit)}>
            <input  className='w-50 mb-3' {...register("name")} placeholder="Your Name" /> <br />
            <input  className='w-50 mb-3' {...register("company", { required: true })} placeholder="Company's Name Designation" /> <br />
            <input  className='w-50 mb-3' {...register("description", { required: true })} placeholder="Description" /> <br />
        
            <input className='btn btn-primary' type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
