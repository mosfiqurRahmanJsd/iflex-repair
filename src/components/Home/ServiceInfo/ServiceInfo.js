import React from "react";
import { Link } from "react-router-dom";
import "./ServiceInfo.css";

const ServiceInfo = ({ data }) => {
  const ObjectId = data._id; 
  const id = ObjectId.toString(); 
 
  
  

  return (
    
      <div className="col-12 col-sm-6 col-md-4">
      <Link to={`/book/${id}`} className='text-decoration-none'>
        <div className="d-flex align-items-center border-radius p-2 m-2 text-decoration-none">
          <div className="me-3">
            <img src={data.imageURL} alt="" className="img-fluid mb-3" />
            <h5 className="text-warning text-center">
              from : {"$" + data.price}
            </h5>
          </div>
          <div className="ms-3">
            <h3 className="text-primary">{data.name}</h3>
            <p className="text-secondary">{data.description}</p>
          </div>
        </div>
        </Link>
      </div>
    
  );
};

export default ServiceInfo;
