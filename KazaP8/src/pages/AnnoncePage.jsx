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
    const hostName = annonce.host.name;
    const hostPicture = annonce.host.picture;

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
            <h1>{annonce.title}</h1>
            <p>{annonce.location}</p>
            {annonce.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
            ))}
            <img src={hostPicture} alt={hostName} />
            <p>{hostName}</p>
            {[...Array(5)].map((_, index) => (
                <i
                    key={index}
                    className={`fa-star ${
                        index < annonce.rating ? "fa-solid" : "fa-regular"
                    }`}
                ></i>
            ))}
            <h2>Description</h2>
            <p>{annonce.description}</p>
            <h2>Équipements</h2>
            <ul>
                {annonce.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))}
            </ul>
        </div>
    );
};

export default Annonce;
