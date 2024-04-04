import React, { useState } from "react";

const Slider = ({ pictures }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const arrowLeft = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const arrowRight = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="pictures">
            <img
                src={pictures[currentImageIndex]}
                alt="image présentation annonce"
                key={pictures[currentImageIndex]}
            />
            <div className="arrow_content">
                <img
                    className="arrow_left"
                    src="../src/assets/images/arrow_left.png"
                    alt="flèche gauche"
                    onClick={arrowLeft}
                />

                <img
                    className="arrow_right"
                    src="../src/assets/images/arrow_right.png"
                    alt="flèche droite"
                    onClick={arrowRight}
                />
            </div>{" "}
            <span className="count">
                {currentImageIndex + 1}/{pictures.length}
            </span>
        </div>
    );
};

export default Slider;
