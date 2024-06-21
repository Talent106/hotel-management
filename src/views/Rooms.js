import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AllRooms from '../constracts/AllRooms';
import Stars from "../components/Stars";
import './Rooms.scss';

const Rooms = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState(false);
    const [star_5, setStar_5] = useState(null);
    const [star_4, setStar_4] = useState(null);

    useEffect(() => {
        const star5 = AllRooms.filter(item => item.reviews == 5);
        const star4 = AllRooms.filter(item => item.reviews == 4);
        setStar_4(star4.length);
        setStar_5(star5.length);
    }, []);

    return (
        <div className="e-room">
            <div className="d-flex mb-4">
                <Button
                    className="me-4"
                    variant="outline-warning"
                    onClick={() => setFilter(false)}
                >
                    <i className="bi bi-sort-alpha-down me-2"></i>Alpha
                </Button>
                <Button
                    className="ms-4 me-4"
                    variant="outline-info"
                    onClick={() => setFilter(false)}
                >
                    <i className="bi bi-sort-numeric-down me-2"></i>Price
                </Button>
                <Button
                    className="ms-4"
                    variant="outline-info"
                    onClick={() => setFilter(true)}
                >
                    <i className="bi bi-sort-numeric-down me-2"></i>Filter
                </Button>
            </div>

            <hr className="snow w-100 mb-4" />

            {filter ?
                <div className="d-flex w-100">
                    <div className="flex-d w-30 snow p-4">
                        <p>Filter By:</p>
                        <div className="d-flex w-100 justify-between">
                            <Form.Check
                                className="mb-3"
                                label="5 stars"
                                name="group1"
                            />
                            <span>{star_5}</span>
                        </div>
                        <div className="d-flex w-100 justify-between">
                            <Form.Check
                                className="mb-3"
                                label="4 stars"
                                name="group1"
                            />
                            <span>{star_4}</span>
                        </div>
                        <Form.Check
                            className="mb-3"
                            label="max"
                            name="group1"
                        />
                    </div>
                    <div className="flex-d w-70 p-4">
                        {AllRooms.map((item, index) =>
                            <div className="d-flex w-100 p-3" key={index}>
                                <Image className="w-30 me-3" src={item.src} rounded/>
                                <div className="flex-d w-70">
                                    <h3 className="text-yellow">{item.name}</h3>
                                    <Stars reviews={item.reviews} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                :
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
            }
        </div>
    )
}

export default Rooms;