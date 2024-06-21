import React from "react";
import Image from 'react-bootstrap/Image';
import Carouselfade from "../components/carousel/CarouselSlow";
import PatterImg from "../assets/services/1.jpg";
import Slide1 from "../assets/services/2.jpg";
import Slide2 from "../assets/services/3.jpg";
import Slide3 from "../assets/services/4.jpg";
import Img5 from "../assets/services/6.jpg";
import './Services.scss';

const Services = () => {
    
    return (
        <div className="management">
            <div className="goulty">
                <Image className="image-left" src={PatterImg} />
                <div className="p-4">
                    <h1 className="text-yellow">Area</h1>
                    <p className="snow">At the base of the Kotelnica Białczańska ski lifts, 
                        this upscale chalet-style hotel in the Tatra Mountains is also a 5-minute 
                        walk from the Terma Bania water park complex.
                    </p>
                </div>
            </div>
            <div className="cta-bg">
            </div>
            <div className="goulty">
                <div className="p-50 border-right-snow">
                    <h1 className="text-yellow">MISKA GASTRO BOWLS</h1>
                    <p className="snow">The right Waiter/Waitress uplifts the dining experience for customers. 
                        We are looking for someone who will have the patience, personality and perseverance 
                        to thrive in this role.
                    </p>
                </div>
                <Carouselfade slide1={Slide1} slide2={Slide2} slide3={Slide3} />
            </div>
            <div className="goulty border-top-snow">
                <Image className="image-left" src={Img5} />
                <div className="p-50">
                    <h1 className="text-yellow">HONEY MOON</h1>
                    <p className="snow">The service and hospitality industries have a lot to gain 
                        from adopting automation for communicating with customers or guests. 
                        There is an expectation for any quality establishment to have timely and 
                        clear messaging about availability, bookings, payments and more. It alleviates 
                        pressures on staff while ensuring patrons get the information they need in a manner 
                        that suggests a well-run and efficient establishment.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;