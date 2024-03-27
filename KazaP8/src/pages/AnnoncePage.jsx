import React, { useState } from "react";
import { useParams } from "react-router-dom";
import annonces from "../data/annonces.json";

const findAnnonceID = (id) => {
    return annonces.find((annonce) => annonce.id === id);
};

const Annonce = () => {
    const { id } = useParams();
    const annonce = findAnnonceID(id);
    const pictures = annonce.pictures;

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

    const [showDescription, setShowDescription] = useState(false);

    return (
        <div>
            <div className="pictures">
                <img
                    src={pictures[currentImageIndex]}
                    alt={annonce.title}
                    key={pictures[currentImageIndex]}
                />{" "}
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
            </div>
            <p>{annonce.title}</p>
            <h2 onClick={() => setShowDescription(!showDescription)}>
                Description
            </h2>
            {showDescription && <p>{annonce.description}</p>}
        </div>
    );
};

export default Annonce;
