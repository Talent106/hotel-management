import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carouselfade from "../carousel/CarouselSlow";
import Slide1 from "../../assets/1.jpeg";
import Slide2 from "../../assets/2.jpeg";
import Slide3 from "../../assets/4.jpeg";
import PatterImg from "../../assets/4.png"
import Book1 from "../../assets/book1.png";
import Book2 from "../../assets/book2.png";
import Book3 from "../../assets/book3.png";
import IntroImg from "../../assets/dc1.png";
import Member1 from "../../assets/member1.png";
import Member2 from "../../assets/member2.png";
import Member3 from "../../assets/member3.png";
import './Landing.scss';

const Books = [
    { name: "Immunity", src: Book1, price: 35, views: 30 },
    { name: "Parasite Cleansing", src: Book2, price: 50, views: 30 },
    { name: "Kitchen Doctor", src: Book3, price: 65, views: 70 }
];

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
                    <h1>Mold Journey</h1>
                    <p>Within hours of exposure to moisture, mold can appear. Besides the risk 
                        mold poses to health, it can cause serious property damage. Any property 
                        or possessions that have been exposed to moisture may become colonized by mold. 
                        This means that when there is heavy rain, melting snow, flooding, leaking pipes, 
                        clogged pipes, poor drainage, damp crawl spaces, attics, or basements, mold will 
                        probably be present. Likewise, mold can be found in air conditioners, air filtration 
                        devices, humidifiers and dehumidifiers, certain kinds of medical equipment, potted 
                        plants, greenhouses, refrigerators, washing machines, automobiles, hotels, restaurants, 
                        libraries, concert halls, in short, just about anywhere. At best, mold will cause 
                        deterioration and loss of value to real property and belongings. At worst, it will 
                        eventually claim the lives of pets, loved ones, and oneself. The purpose of this 
                        series is to promote vigilance surrounding mold and to define the correct procedures 
                        for removing mold and recovering full health after exposure.
                    </p>
                </div>
            </div>

            <div className="books">
                <h1>BOOKS</h1>
                <div className="books-gallery">
                    {Books.map((item) =>
                        <Card className="book-card">
                            <Card.Img className="book-logo" variant="top" src={item.src} />
                            <Card.Body>
                                <Card.Text className="card-text-book">
                                    <a>{item.name}</a>                                
                                    <a>{item.views}</a>
                                    <a>${item.price}</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </div>
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