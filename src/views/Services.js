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
            <div className="goulty">
                <Carouselfade slide1={Slide1} slide2={Slide2} slide3={Slide3} />
                <div className="p-4">
                    <h1 className="text-yellow">Breakfast</h1>
                    <p className="snow">A specialty cafe in the heart of Łódź, where you can concentrate, work, 
                        and eat a nutritious and tasty breakfast or lunch during the day, and enjoy a natural wine from the 
                        Natural Rascal selection in the evening.
                    </p>
                </div>
            </div>
            <div className="goulty">
                <div className="p-50">
                    <h1 className="text-yellow">MISKA GASTRO BOWLS</h1>
                    <p className="snow">Asian flavours inspired by the culinary art of Thailand are the 
                        specialty at Miska. A perfect place for lunch or an evening out and open 7 days a week. 
                        Stop by and explore our menu.
                    </p>
                </div>
                <Image className="image-left" src={PatterImg} />
            </div>
        </div>
    )
}

export default Services;