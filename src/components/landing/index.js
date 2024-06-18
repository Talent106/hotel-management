import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carouselfade from "../carousel/CarouselSlow";
import Slide1 from "../../assets/1.jpg";
import Slide2 from "../../assets/2.jpg";
import Slide3 from "../../assets/3.jpg";
import PatterImg from "../../assets/dc2.png"
import GuestRoom from "../../assets/guest.jpg";
import IntroImg from "../../assets/dc1.png";
import Member1 from "../../assets/member1.png";
import Member2 from "../../assets/member2.png";
import Member3 from "../../assets/member3.png";
import './Landing.scss';

const Members = [
    { name: "Ingrid Naiman", src: Member1, content: "I have developed a complete line of herbal products and essential oils to recover from mold exposure." },
    { name: "Hiroki Moto", src: Member2, content: "I am assuring the availability of digital materials needed to recover." },
    { name: "Balaji Sampath", src: Member3, content: "I am administering the Locals.com community." }
];

const Landing = () => {
    return (
        <div className="landing">
            <Carouselfade slide1={Slide1} slide2={Slide2} slide3={Slide3} />

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
                    <h1>Your Guide to Recovery from Mold Exposure</h1>
                    <p>Ingrid Naiman is a world respected author and clinician. Her house was flooded 
                        following faulty installation of a washing machine, and she was deathly ill. 
                        Contrary to the advice of many, she remediated the damage to the house, and eventually 
                        recovered her her health using 100% natural methods. Her journey took several years 
                        of study, but she has been there and reclaimed her cognitive functions and vitality.  
                        Her mission is to make people aware of the risks and to guide them safely through the 
                        steps necessary to make the living and working space safe while simultaneously 
                        regenerating the body and mind after exposure to mold.  Join her and find out how 
                        to make complex decisions that affect life itself. 
                    </p>
                </div>
            </div>

            <div className="members">
                <h1>Researchers</h1>
                <div className="member-card">
                    {Members.map((item) =>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.src} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.content}
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Landing;