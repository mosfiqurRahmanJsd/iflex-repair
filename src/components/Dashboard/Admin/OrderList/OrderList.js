import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);

  const [loadUpdate, setLoadUpdate] = useState([]);



  useEffect(() => {
    fetch("https://young-hollows-94720.herokuapp.com/allBookings")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);


  
  
const loadOrder = id => {
    fetch(`https://young-hollows-94720.herokuapp.com/allBookings/${id}`)
    .then(res => res.json())
    .then(data => {
       setLoadUpdate(data)
    })


}




const updateOrder = id => {
      const status = document.getElementById('status').value; 
      const order = {status}
      fetch(`https://young-hollows-94720.herokuapp.com/update/${id}`, {
        method: "PATCH", 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
        console.log('updated'); 
      })
      



}
    
 



  return (
    <div className="row w-100">
      <div className="col-md-2 p-0">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 bg-color">
        <div className="p-5">
          <h1 className="mb-3 text-primary">Order Lists</h1>

          <div className='d-flex align-items-center'>
              Update Status : <input defaultValue={loadUpdate.status} id="status" />
              <button onClick={() => updateOrder(loadUpdate._id)} className='btn btn-success ms-2'>Submit</button>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Service</th>
                <th scope="col">Pay With</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((data) => (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.service}</td>
                  <td>{data.payment}</td>
                  <td className="bg-white"> {data.status} </td>
                  <td>
                    <button onClick={() => loadOrder(data._id)} className="btn btn-primary">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
