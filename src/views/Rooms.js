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
        <div className="e-room">
            <div className="d-flex mb-4">
                <Button
                    className="me-4"
                    variant="outline-warning"
                >
                    <i className="bi bi-sort-alpha-down me-2"></i>Alpha
                </Button>
                <Button
                    className="ms-4"
                    variant="outline-info"
                >
                    <i className="bi bi-sort-numeric-down me-2"></i>Price
                </Button>
            </div>
            <hr className="snow w-100 mb-4" />
            <div className="gallery">
                {AllRooms.map((item, index) =>
                    <Card style={{ width: '20rem' }} key={index}>
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
                            <div className="d-flex">
                                <Button
                                    className="me-2"
                                    variant="primary"
                                    onClick={() => navigate(`/room?ID=${item.id}`)}
                                >
                                    <i className="bi bi-eye-fill me-2"></i>View Details
                                </Button>
                                <Button
                                    className="ms-2"
                                    variant="success"
                                    onClick={() => navigate(`/reservation?ID=${item.id}`)}
                                >
                                    <i className="bi bi-stopwatch-fill me-2"></i>Reservation
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default Rooms;