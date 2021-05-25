import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='bg-warning div-style'>
            <div className="container py-5">
                <form action="">
                    <label for="name" class="form-label">Your Name: </label>
                    <input type="text" id="name" class="form-control mb-3"/>

                    <label for="email" class="form-label">Your Email: </label>
                    <input type="email" id="email" class="form-control mb-3"/>

                    <label for="company" class="form-label">Company Name: </label>
                    <input type="email" id="company" class="form-control mb-3"/>
                    
                    <button className="btn btn-primary">SEND</button>
                </form>
            </div>
            
        </div>
    );
}

export default Contact;
