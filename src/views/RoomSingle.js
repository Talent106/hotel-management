import React, { useEffect } from "react";
import queryFormat from "querystring";
import _ from "lodash";
import Room from "../components/Room";

const RoomSingle = (props) => {

    useEffect(() => {
        const params = queryFormat.parse(props.location.search);
        console("wwwwwww", params);
    }, []);

    return (
        <Room />
    )
}

export default RoomSingle;