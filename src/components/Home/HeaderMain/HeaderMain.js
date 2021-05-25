import React from "react";
import "./HeaderMain.css";
const HeaderMain = () => {
  return (
    <section className="container-fluid background-image d-flex align-items-center">
      <div className="container mt-5 pt-5">
        <h1 className="text-light mt-2">Quick Mobile Help for 
            <br />
         All Kind of Phones</h1>
        <p className='w-25 text-secondary'>
          Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Get in touchwith
          me for cooperationt amet, consectetur adipisicing elit, sed do eiusmod
          tempor
        </p>
        <button className="btn btn-warning text-light">SEND</button>
      </div>
    </section>
  );
};

export default HeaderMain;
