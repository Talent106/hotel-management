import React from "react";
import { useNavigate } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Carouselfade from "../carousel/CarouselSlow";
import Slide1 from "../../assets/1.jpg";
import Slide2 from "../../assets/2.jpg";
import Slide3 from "../../assets/3.jpg";
import PatterImg from "../../assets/hotel.jpg";
import GuestRoom from "../../assets/guest.jpg";
import IntroImg from "../../assets/checkin.jpg";
import Rooms from "../../constracts/Rooms";
import './Landing.scss';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="landing">
            <Carouselfade slide1={Slide1} slide2={Slide2} slide3={Slide3}/>

            <div className="pattern">
                <Image className="image-left" src={PatterImg} rounded/>
                <div className="pattern-text">
                    <h1>Boutique Hotel By Krakow Old Town</h1>
                    <p>In the heart of the city and next to Florian Gate, the largest gate into the historical city,
                        sits the Hotel Indigo® Krakow – Old Town. Housed in a stunning 19th century building. 
                        The hotel design has been inspired by three Polish painters from different centuries and that heritage 
                        has been subtly brought into our rooms and our public areas. Old Kleparz market is opposite our hotel and 
                        we are walking distance to Krakow’s Main Square, St. Mary’s Basilica, the Clothes Hall, the main shopping 
                        street (Florianska), Wawel Castle and the Jewish district.
                    </p>
                </div>
            </div>

            <div className="guest">
                <div className="guest-text">
                    <h1>Guest Rooms</h1>
                    <p>Our individually designed rooms are inspired by the most renowned polish painters. Rooms have been 
                        furnished in the highest standards and equipped with the most hi tech devices and solutions to increase 
                        the comfort level. All rooms provide free Wi-Fi, coffee facilities, safe, minibar.
                    </p>
                </div>
                <Image className="image-right" src={GuestRoom} rounded/>
            </div>

            <div className="cta-bg">
            </div>

            <div className="introduce">
                <Image className="image-left" src={IntroImg} rounded/>
                <div className="pattern-text">
                    <h1>About Us</h1>
                    <p>Occupying a modern high-rise in the city center, this upscale hotel is a 3-minute 
                        walk from a tram stop, and a 6-minute walk from the shops and restaurants of the 
                        Złote Tarasy complex.
                    </p>
                </div>
            </div>

            <div className="rooms">
                <div className="room-card">
                    {Rooms.map((item, index) =>
                        <Card style={{ width: '25rem', height: '15rem' }} key={item.src + index}>
                            <Card.Img className="pointer" variant="top" src={item.src} onClick={() => navigate(item.url)} />
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Landing;