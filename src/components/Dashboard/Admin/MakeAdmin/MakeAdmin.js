import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";

const MakeAdmin = () => {
  const [email, setEmail] = useState({});


  const handleBlur = e => {
    setEmail(e.target.value);
  }

  const onSubmit = () => {
    const adminData = {
        email : email
    }
    const url = `https://young-hollows-94720.herokuapp.com/newAdmin`; 
  //   console.log(serviceData)
    fetch(url, {
        method: "POST", 
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(adminData)
    })
    .then(res => console.log('server site res', res))

  };




  return (
    <div className="row w-100">
        <div className="col-md-2 p-0">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 bg-color">
            <div className="p-5">
              <h1 className="mb-3 text-primary">Make Admin</h1>
              <p>Email :</p>
              <input onBlur={handleBlur} type="email" name="email" id="" className='form-control'/> <br />
              <button onClick={onSubmit} className='btn btn-success'>Submit</button>
            </div>
        </div>
      </div>
  );
};

export default MakeAdmin;
