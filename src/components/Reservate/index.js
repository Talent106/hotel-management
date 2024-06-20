import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Carouselfade from "../carousel/CarouselSlow";
import Stars from "../Stars";
import 'react-datepicker/dist/react-datepicker.css';
import './Reservate.scss';

const Reservate = ({
    name, img, max, bed, price, reviews, data
}) => {
    const [startDate, setStartDate] = useState(moment().format("MM/DD/YYYY"));
    const [endDate, setEndDate] = useState(moment().format("MM/DD/YYYY"));

    const handleChange = ({ start, end }) => {
        const newStartDate = start ? moment(start).format("MM/DD/YYYY") : startDate;
        const newEndDate = end ? moment(end).format("MM/DD/YYYY") : endDate;
        
        if (newStartDate > newEndDate) {
            setStartDate(newEndDate);
            setEndDate(newStartDate);
        } else {
            setStartDate(newStartDate);
            setEndDate(newEndDate);
        }
    };
    
    const handleChangeStart = (date) => handleChange({ start: date });

    const handleChangeEnd = (date) => handleChange({ end: date });

    return (
        <div className="reservate">
            <Image className="w-100" src={data.img4} />
            <h1 className="text-yellow text-center pt-4">{name}</h1>
            <Stars reviews={reviews} />

            <div className="d-flex w-100">
                <Carouselfade slide1={data.img1} slide2={data.img2} slide3={data.img3} />
                <div className="flex-d p-50 snow w-100">
                    <Form className="d-flex mb-4">
                        <DatePicker
                            className="me-2"
                            selected={startDate}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            onChange={handleChangeStart}
                        />
                        <DatePicker
                            selected={endDate}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            onChange={handleChangeEnd}
                        />
                    </Form>
                    <div className="flex-d custom-btn">
                        <Form.Check
                            type="radio"
                            label="FLEXIBLE RATE"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <div className="d-flex w-100">
                            <div className="flex-d">
                                <p className="ms-4 mt-2"><i class="bi bi-check-circle-fill me-3"></i>Cancel free of charge</p>
                                <p className="ms-4"><i class="bi bi-check-circle-fill me-3"></i>No prepayment required</p>
                            </div>
                            <h3 className="text-yellow w-50 d-flex align-center justify-end">${price}</h3>
                        </div>
                    </div>
                    <div className="flex-d mt-4 custom-btn">
                        <Form.Check
                            type="radio"
                            label="FLEXIBLE RATE - BED AND BREAKFAST"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                        <div className="d-flex w-100">
                            <div className="flex-d">
                                <p className="ms-4 mt-2"><i class="bi bi-check-circle-fill me-3"></i>Cancel free of charge</p>
                                <p className="ms-4"><i class="bi bi-check-circle-fill me-3"></i>No prepayment required</p>
                                <p className="ms-4"><i class="bi bi-check-circle-fill me-3"></i>Breakfast included</p>
                            </div>
                            <h3 className="text-yellow w-50 d-flex align-center justify-end">${Number(price) + 50}</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reservate;