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
    const [reviews, setReviews] = useState(null);
    const [content, setContent] = useState(null);
    const [data, setData] = useState({});

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
            setData(room.data);
        }
    }, []);

    return (
        <Room
            name={name}
            img={img}
            max={max}
            bed={bed}
            price={price}
            reviews={reviews}
            content={content}
            data={data}
        />
    )
}

export default RoomSingle;