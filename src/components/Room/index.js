import React from "react";
import { useNavigate } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Carouselfade from "../carousel/CarouselSlow";
import Stars from "../Stars";
import './Room.scss';

const Room = ({
    name, reviews, content, data, id
}) => {
    const navigate = useNavigate();

    return (
        <div className="room">
            <Image className="w-100" src={data.img4} />
            <h1 className="text-yellow text-center pt-4">{name}</h1>
            <Stars reviews={reviews} center={true} />
            <p className="text-center ps-300 pe-300 f-25 snow">{content}</p>

            <div className="d-flex justify-center w-100">
                <Carouselfade slide1={data.img1} slide2={data.img2} slide3={data.img3} />
            </div>
            <div className="d-flex justify-center p-50">
                <Button
                    className="mt-4 me-4"
                    variant="outline-warning"
                    onClick={() => navigate(`/reservation?ID=${id}`)}
                >
                    <i className="bi bi-stopwatch-fill me-2"></i>
                    Reservation
                </Button>
                <Button
                    className="mt-4 ms-4"
                    variant="outline-info"
                    onClick={() => navigate("/rooms")}
                >
                    <i className="bi bi-back me-2"></i>
                    Back
                </Button>
            </div>
        </div>
    )
}

export default Room;