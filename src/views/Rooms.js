import React from "react";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AllRooms from '../constracts/AllRooms';
import Stars from "../components/Stars";
import './Rooms.scss';

const Rooms = () => {
    const navigate = useNavigate();

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
                        <Stars reviews={item.reviews} />
                        <Card.Text>
                            From <span className="f-arial f-25 text-primary">${item.price}</span>
                            <p>Fees and taxes included</p>
                        </Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => navigate(`/room?ID=${item.id}`)}
                        >
                            View Details
                        </Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

export default Rooms;