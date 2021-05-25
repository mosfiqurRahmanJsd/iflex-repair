import React, { useEffect, useState } from "react";
import ServiceInfo from "../ServiceInfo/ServiceInfo";

const Service = () => {
  const [servicesData, setServicesData] = useState([]); 

  useEffect(() => {
    fetch('https://young-hollows-94720.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServicesData(data))

  }, [])



  return (
    <section className="container mt-5">
      <h1 className="text-primary text-center">
        What Kind of Repairs Can We Do?
      </h1>
      <p className="text-secondary text-center py-3">
        Our company can carry out all types of repairs for
        <br />
        mobile devices, including:
      </p>
      <div className="row">
          {
            servicesData.map(data => <ServiceInfo data={data} key={data._id}></ServiceInfo>)
          }
      </div>
    </section>
  );
};

export default Service;
