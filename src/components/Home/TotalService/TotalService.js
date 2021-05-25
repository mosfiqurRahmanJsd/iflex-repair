import React from "react";
import "./TotalService.css";
const TotalService = () => {
  return (
    <div className="container-fluid bg-primary bg-color py-5 mt-5">
      <div className="container pt-5">
        <h1 className="text-center text-light">
          Trust Professionals,
          <br />
          Fix Your Mobile Phone in our Service
        </h1>
        <div className="row pt-5 d-flex align-items-center text-center">
            <div className="col-12 col-sm-6 col-md-3 ">
                <h3 className='display-3 text-light'>1331</h3>
                <p className='text-light'>Mobile Fixed</p>
            </div>
            <div className="col-12 col-sm-6 col-md-3 ">
                <h3 className='display-3 text-light'>15</h3>
                <p className='text-light'>Awards winning</p>
            </div>
            <div className="col-12 col-sm-6 col-md-3 ">
                <h3 className='display-3 text-light'>12</h3>
                <p className='text-light'>Years of Experience</p>
            </div>
            <div className="col-12 col-sm-6 col-md-3 ">
                <h3 className='display-3 text-light'>825</h3>
                <p className='text-light'>Satisfied Clients</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TotalService;
