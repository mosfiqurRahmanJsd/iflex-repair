import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Sidebar/Sidebar";

const AddService = () => {


  const { register, handleSubmit, watch, formState: { errors }, } = useForm();

  const [imageURL, setImageURL] = useState(null); 


  const onSubmit = (data) => {
      const serviceData = {
          name: data.title,
          description: data.description, 
          price: data.price, 
          imageURL: imageURL
      }
      const url = `https://young-hollows-94720.herokuapp.com/addService`; 
    //   console.log(serviceData)
      fetch(url, {
          method: "POST", 
          headers: {
              'content-type': 'application/json'
          }, 
          body: JSON.stringify(serviceData)
      })
      .then(res => console.log('server site res', res))

    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData(); 
        imageData.set('key', '7cfe7387c84999a6c4f1dc752c2ce9cf'); 
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

  return (
    <div className="row w-100">
      <div className="col-md-2 p-0">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 bg-color">
        <div className="p-5">
          <h1 className="mb-3 text-primary">Add Service</h1>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Service Title</label> <br />
            <input id='title'  className='w-50 mb-3' {...register("title")} placeholder="Edit Title" /> <br />

            <label htmlFor="description">Description</label> <br />
            <input id='description' className='w-50 mb-3' {...register("description", { required: true })} placeholder="Enter Description" /> <br />

            <label htmlFor="price">Price</label> <br />
            <input id='price'  className='w-50 mb-3' {...register("price")} placeholder="Enter Price" /> <br />

            <label htmlFor="image"></label> 
            <input id="image" className="mb-3" type="file" onChange={handleImageUpload} /> <br />
            
        
            <input className='btn btn-primary' type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
