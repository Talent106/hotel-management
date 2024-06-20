import React from "react";
import Image from 'react-bootstrap/Image';
import Carouselfade from "../carousel/CarouselSlow";
import Stars from "../Stars";
import './Room.scss';

const Room = ({
    name, reviews, content, data
}) => {

    return (
        <div className="room">
            <Image className="w-100" src={data.img4} />
            <h1 className="text-yellow text-center pt-4">{name}</h1>
            <Stars reviews={reviews} />
            <p className="text-center ps-300 pe-300 f-25 snow">{content}</p>

            <div className="d-flex justify-center w-100">
                <Carouselfade slide1={data.img1} slide2={data.img2} slide3={data.img3} />
            </div>
        </div>
    )
}

export default Room;