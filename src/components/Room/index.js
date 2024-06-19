import React from "react";
import Image from 'react-bootstrap/Image';
import Carouselfade from "../carousel/CarouselSlow";
import Stars from "../Stars";
import './Room.scss';

const Room = ({
    name, img, max, bed, price, reviews, content, data
}) => {

    return (
        <div className="room">
            <Image className="w-100" src={img} />
            <h1 className="text-yellow text-center pt-4">{name}</h1>
            <Stars reviews={reviews} />
            <p className="text-center ps-300 pe-300 f-25 snow">{content}</p>

            <div className="d-flex justify-center w-100">
                <Carouselfade slide1={data.img1} slide2={data.img2} slide3={data.img3} />
            </div>

            <div className="w-100 snow flex-d justify-center align-center">
                <p>From <span className="f-arial f-25 text-info">${price}</span>, Fees and taxes included</p>
                <p><i className="bi bi-people-fill f-25" /> {max} pers.max</p>
            </div>
        </div>
    )
}

export default Room;