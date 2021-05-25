import React, { useEffect, useState } from "react";
import TestimonialsData from "../TestimonialsData/TestimonialsData";



const Testimonials = () => {
  const [reviews, setReviews] = useState([]); 

  useEffect(() => {
    fetch('https://young-hollows-94720.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))

  }, [])




  return (
    <section className="container my-5 py-2">
      <h1 className="text-primary text-center">
      Testimonials from Our Clients
      </h1>
      <p className="text-secondary text-center py-3">
      Rem ipsum dolor sit amet, consectetur adipisicing
        <br />
        elit, sed do eiusmod tempor incididamco
      </p>
      <div className="row">
        {reviews.map((data) => (
          <TestimonialsData data={data} key={data._id}></TestimonialsData>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
