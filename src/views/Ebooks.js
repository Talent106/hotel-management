import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Member1 from "../assets/member1.png";
import Member2 from "../assets/member2.png";
import Member3 from "../assets/member3.png";
import './Ebooks.scss';

const Members = [
    { name: "Ingrid Naiman", src: Member1, content: "I have developed a complete line of herbal products and " },
    { name: "Hiroki Moto", src: Member2, content: "I am assuring the availability of digital materials needed to recover." },
    { name: "Balaji Sampath", src: Member3, content: "I am administering the Locals.com community." },
    { name: "Ingrid Naiman", src: Member1, content: "I have developed a complete line of herbal products and " },
    { name: "Hiroki Moto", src: Member2, content: "I am assuring the availability of digital materials needed to recover." },
    { name: "Balaji Sampath", src: Member3, content: "I am administering the Locals.com community." }
];

const Ebooks = () => {
    return (
        <div className="ebooks">
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
    )
}

export default Ebooks;