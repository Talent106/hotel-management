import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AllRooms from '../constracts/AllRooms';
import './Rooms.scss';

const Rooms = () => {
    return (
        <div className="ebooks">
            {AllRooms.map((item) =>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={item.src} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <i className="bi bi-people-fill" /> {item.max} pers.max
                        </Card.Text>
                        <Card.Text>
                            <i className="bi bi-bookmark-plus-fill" /> {item.bed}
                        </Card.Text>
                        <Card.Text>
                            From <span className="f-arial f-25 text-primary">${item.price}</span>
                            <p>Fees and taxes included</p>
                        </Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

export default Rooms;