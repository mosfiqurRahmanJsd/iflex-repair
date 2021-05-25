import React from 'react';
import Header from '../Header/Header';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import AboutUs from '../AboutUs/AboutUs';
import Service from '../Service/Service';
import TotalService from '../TotalService/TotalService';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BusinessInfo></BusinessInfo>
            <AboutUs></AboutUs>
            <Service></Service>
            <TotalService></TotalService>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default Home;
