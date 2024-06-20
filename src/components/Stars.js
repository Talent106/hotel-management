import React from "react";

const Stars = ({ reviews }) => {
    return (
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
    )
}

export default Stars;