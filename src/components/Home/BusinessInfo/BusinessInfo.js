import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import { faMobile } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: "Iphone", 
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
        icon: faMobile
    }, 
    {
        title: "Samsung", 
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
        icon: faMobile
    }, 
    {
        title: "Sony", 
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
        icon: faMobile
    }
]

const BusinessInfo = () => {
  return (
    <section className='container mt-5'>
      <h2 className="text-primary text-center">Smartphones that We Work With</h2>
      <p className='text-secondary text-center py-3'>
        Rem ipsum dolor sit amet, consectetur adipisicing
        <br />
        elit, sed do eiusmod tempor incididun
      </p>
      <div className="row">
          {
                infosData.map(data => <InfoCard data={data} key={data.title}></InfoCard>)
          }
      </div>
    </section>
  );
};

export default BusinessInfo;
