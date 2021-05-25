import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";

const ManageService = () => {
  const [servicesData, setServicesData] = useState([]); 

  useEffect(() => {
    fetch('https://young-hollows-94720.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServicesData(data))

  }, [])

  const deleteService = id => {
    fetch(`https://young-hollows-94720.herokuapp.com/delete/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(result => {
      console.log('deleted success')
    })


  }



  return (
    <div className="row  w-100">
        <div className="col-md-2 p-0">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 bg-color">
            <div className="p-5">
              <h1 className="mb-3 text-primary">Manage Service</h1>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Service Title</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                
                {
                  servicesData.map(data => (
                    
                    <tr>
                      <td>{data.name}</td>
                      <td>{data.price}</td>
                      <button className="btn btn-danger my-2 text-dark" onClick={() => deleteService(data._id)}>Delete</button>
                    </tr>
                  ))
                }
                  
                </tbody>
              </table>
              
            </div>
        </div>
      </div>
  );
};

export default ManageService;
