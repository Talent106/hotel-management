import React from "react";
import Button from 'react-bootstrap/Button';

const FilterButton = ({ onAlpha, onPrice, onFilter, filter }) => (
    <>
        {filter == 0 ?
            <Button
                className="me-4"
                variant="warning"
                onClick={onAlpha}
            >
                <i className="bi bi-sort-alpha-down me-2"></i>Alpha
            </Button>
            :
            <Button
                className="me-4"
                variant="outline-warning"
                onClick={onAlpha}
            >
                <i className="bi bi-sort-alpha-down me-2"></i>Alpha
            </Button>
        }
        {filter == 1 ?
            <Button
                className="ms-4 me-4"
                variant="info"
                onClick={onPrice}
            >
                <i className="bi bi-sort-numeric-down me-2"></i>Price
            </Button>
            :
            <Button
                className="ms-4 me-4"
                variant="outline-info"
                onClick={onPrice}
            >
                <i className="bi bi-sort-numeric-down me-2"></i>Price
            </Button>
        }
        {filter == 2 ?
            <Button
                className="ms-4"
                variant="danger"
                onClick={onFilter}
            >
                <i className="bi bi-funnel-fill me-2"></i>Filter
            </Button>
            :
            <Button
                className="ms-4"
                variant="outline-danger"
                onClick={onFilter}
            >
                <i className="bi bi-funnel-fill me-2"></i>Filter
            </Button>
        }
    </>
);

export default FilterButton;