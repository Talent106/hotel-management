import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import _ from "lodash";
import Room from "../components/Room";
import AllRooms from "../constracts/AllRooms";

const RoomSingle = () => {
    const params = useLocation().search;
    const [name, setName] = useState(null);
    const [img, setImg] = useState(null);
    const [max, setMax] = useState(null);
    const [bed, setBed] = useState(null);
    const [price, setPrice] = useState(null);
    const [reivews, setReviews] = useState(null);
    const [content, setContent] = useState(null);

    useEffect(() => {
        const query = new URLSearchParams(params);
        if (query.get('ID')) {
            let room = _.find(AllRooms, function(o) { return o.id == query.get('ID'); });
            setName(room.name);
            setImg(room.src);
            setMax(room.max);
            setBed(room.bed);
            setPrice(room.price);
            setReviews(room.reviews);
            setContent(room.content);
        }
    }, []);

    return (
        <Room
            name={name}
            img={img}
            max={max}
            bed={bed}
            price={price}
            reivews={reivews}
            content={content}
        />
    )
}

export default RoomSingle;