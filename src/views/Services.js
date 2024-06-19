import React from "react";
import Image from 'react-bootstrap/Image';
import Carouselfade from "../components/carousel/CarouselSlow";
import PatterImg from "../assets/services/1.jpg";
import Slide1 from "../assets/services/2.jpg";
import Slide2 from "../assets/services/3.jpg";
import Slide3 from "../assets/services/4.jpg";
import Img5 from "../assets/services/6.jpg";
import Slide4 from "../assets/4.jpg";
import Slide5 from "../assets/5.jpg";
import Slide6 from "../assets/6.jpg";
import './Services.scss';

const Services = () => {
    
    return (
        <div className="management">
            <Carouselfade slide1={Slide4} slide2={Slide5} slide3={Slide6}/>
            <div className="goulty">
                <Image className="image-left" src={PatterImg} />
                <div className="p-4">
                    <h1 className="text-yellow">Breakfast</h1>
                    <p className="snow">A specialty cafe in the heart of Łódź, where you can concentrate, work, 
                        and eat a nutritious and tasty breakfast or lunch during the day, and enjoy a natural wine from the 
                        Natural Rascal selection in the evening.
                    </p>
                </div>
            </div>
            <div className="cta-bg">
            </div>
            <div className="goulty">
                <div className="p-50 border-right-snow">
                    <h1 className="text-yellow">MISKA GASTRO BOWLS</h1>
                    <p className="snow">Asian flavours inspired by the culinary art of Thailand are the 
                        specialty at Miska. A perfect place for lunch or an evening out and open 7 days a week. 
                        Stop by and explore our menu.
                    </p>
                </div>
                <Carouselfade slide1={Slide1} slide2={Slide2} slide3={Slide3} />
            </div>
            <div className="goulty border-top-snow">
                <Image className="image-left" src={Img5} />
                <div className="p-50">
                    <h1 className="text-yellow">SPORTS</h1>
                    <p className="snow">Asian flavours inspired by the culinary art of Thailand are the 
                        specialty at Miska. A perfect place for lunch or an evening out and open 7 days a week. 
                        Stop by and explore our menu.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;