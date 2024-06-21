import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AllRooms from '../constracts/AllRooms';
import Stars from "../components/Stars";
import FilterButton from "../components/FilterButton";
import './Rooms.scss';

const Rooms = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState(null);
    const [star_5, setStar_5] = useState(null);
    const [star_4, setStar_4] = useState(null);
    const [check5, setCheck5] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [all_Rooms, setAll_Rooms] = useState(AllRooms);

    useEffect(() => {
        const star5 = AllRooms.filter(item => item.reviews == 5);
        const star4 = AllRooms.filter(item => item.reviews == 4);
        setStar_4(star4.length);
        setStar_5(star5.length);
    }, []);

    const handleCheck = (e) => {
        if (e == 5) {
            setCheck5(!check5);
        } else {
            setCheck4(!check4);
        }
        handleCheckFilter(e)
    }

    const handleCheckFilter = (e) => {
        if (check5 || check4) {
            let All_Rooms = AllRooms.filter(item => item.reviews == 5 || item.reviews == 4);
            setAll_Rooms(All_Rooms);
            console.log("eeeeeeeee", e);
        } else if (check4 && check5) {
            let All_Rooms = AllRooms.filter(item => item.reviews == e);
            setAll_Rooms(All_Rooms);
            console.log("wwwwwww", e);
        } else {
            setAll_Rooms(AllRooms);
        }
    }

    return (
        <div className="e-room">
            <div className="d-flex mb-4">
                <FilterButton
                    onAlpha={() => setFilter(0)}
                    onPrice={() => setFilter(1)}
                    onFilter={() => setFilter(2)}
                    filter={filter}
                />
            </div>

            <hr className="snow w-100 mb-4" />

            {filter == 2 ?
                <div className="d-flex w-100">
                    <div className="flex-d w-30 snow p-4">
                        <p>Filter By:</p>
                        <div className="d-flex w-100 justify-between">
                            <Form.Check
                                className="mb-3"
                                label="5 stars"
                                name="group1"
                                checked={check5}
                                onChange={() => handleCheck(5)}
                            />
                            <span>{star_5}</span>
                        </div>
                        <div className="d-flex w-100 justify-between">
                            <Form.Check
                                className="mb-3"
                                label="4 stars"
                                name="group1"
                                checked={check4}
                                onChange={() => handleCheck(4)}
                            />
                            <span>{star_4}</span>
                        </div>
                        <Form.Check
                            className="mb-3"
                            label="max"
                            name="group1"
                        />
                        <>
                            <Form.Label>Price Range</Form.Label>
                            <Form.Range />
                        </>
                    </div>
                    <div className="flex-d w-70 p-4">
                        {all_Rooms.map((item, index) =>
                            <div className="d-flex w-100 p-3" key={index}>
                                <Image className="w-30 me-3" src={item.src} rounded/>
                                <div className="flex-d w-70 snow">
                                    <h3 className="text-info">{item.name}</h3>
                                    <Stars reviews={item.reviews} center={false} />
                                    <span><i className="bi bi-box2-fill me-2"></i>{item.bed}</span>
                                    <span><i className="bi bi-people-fill me-2"></i>{item.max}</span>
                                    <span><i className="bi bi-credit-card-2-back-fill me-2"></i>${item.price}</span>
                                    <span><i className="bi bi-bookmark-fill me-2"></i>{item.content}</span>
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
                                <Stars reviews={item.reviews} center={true} />
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