import React from "react";
import Image from 'react-bootstrap/Image';
import './Room.scss';

const Room = ({
    name, img, max, bed, price, reviews, content, data
}) => {

    return (
        <div className="room">
            <Image className="w-100" src={img} />
            <h1 className="text-yellow text-center pt-4">{name}</h1>
            <div className="d-flex w-100 pb-4 justify-center">
                {reviews == 5 &&
                    <>
                        <i className="bi bi-star-fill text-yellow me-2" />
                        <i className="bi bi-star-fill text-yellow me-2" />
                        <i className="bi bi-star-fill text-yellow me-2" />
                        <i className="bi bi-star-fill text-yellow me-2" />
                        <i className="bi bi-star-fill text-yellow me-2" />
                    </>
                }
                {reviews == 4 &&
                    <>
                        <i className="bi bi-star-fill text-yellow me-2" />
                        <i className="bi bi-star-fill text-yellow me-2" />
                        <i className="bi bi-star-fill text-yellow me-2" />
                        <i className="bi bi-star-fill text-yellow me-2" />
                    </>
                }
                {reviews == 3 &&
                    <>
                        <i className="bi bi-star-fill text-yellow me-2" />
                        <i className="bi bi-star-fill text-yellow me-2" />
                        <i className="bi bi-star-fill text-yellow me-2" />
                    </>
                }
                {reviews == 2 &&
                    <>
                        <i className="bi bi-star-fill text-yellow me-2" />
                        <i className="bi bi-star-fill text-yellow me-2" />
                    </>
                }
                {reviews == 1 &&
                    <i className="bi bi-star-fill text-yellow me-2" />
                }
            </div>
            
            <p className="text-center ps-300 pe-300 f-25 snow">{content}</p>
        </div>
    )
}

export default Room;