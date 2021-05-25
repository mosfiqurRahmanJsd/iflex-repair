import React from 'react';

const TestimonialsData = ({data}) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 d-flex align-items-center py-5">
        <div className="me-3">
            <img src={data.imageURL} alt="" className='mb-3 rounded-circle' />
        </div>
        <div className="ms-3 border-start ps-3">
            <p className='text-primary'>{data.description}</p>
            <h6 className='text-secondary fst-italic'>{data.name}</h6>
            <h6 className='text-secondary fst-italic'>CEO, {data.company}</h6>
        </div>
    </div>
    );
}

export default TestimonialsData;
