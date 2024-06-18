import React from "react";
import Image from 'react-bootstrap/Image';
import Carouselfade from "../components/carousel/CarouselSlow";
import PatterImg from "../assets/services/1.jpg";
import Slide1 from "../assets/services/2.jpg";
import Slide2 from "../assets/services/3.jpg";
import Slide3 from "../assets/services/4.jpg";
import './Services.scss';

const Services = () => {
    
    return (
        <div className="management">
            <Carouselfade slide1={Slide1} slide2={Slide2} slide3={Slide3} />
            <div className="goulty">
                <Image className="image-left" src={PatterImg} rounded/>
                <div className="p-4">
                    <h1 className="text-yellow">THE GOULTY</h1>
                    <p className="snow">The Goulty offers traditional and locally inspired cuisine, delicious desserts 
                        and a selection of fine wines to compliment your meal. Offering panoramic sea views, 
                        we invite you to have a light snack or a delicious three course meal.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;