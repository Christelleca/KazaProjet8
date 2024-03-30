import React, { useState } from "react";
import { useParams } from "react-router-dom";
import annonces from "../data/annonces.json";
import NotFound from "./NotFound";

const findAnnonceID = (id) => {
    return annonces.find((annonce) => annonce.id === id);
};

const Annonce = () => {
    const { id } = useParams();
    const annonce = findAnnonceID(id);

    if (!annonce) {
        return <NotFound />;
    }

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
                </div>
            </div>
            <article className="info_host">
                <section className="host_title_detail">
                    <h1>{annonce.title}</h1>
                    <p>{annonce.location}</p>

                    <div className="content_tag">
                        {annonce.tags.map((tag, index) => (
                            <p className="tag" key={index}>
                                {tag}
                            </p>
                        ))}
                    </div>
                </section>
                <section className="host_rating_img">
                    <img src={hostPicture} alt={hostName} />
                    <p>{hostName}</p>
                    {[...Array(5)].map((_, index) => (
                        <i
                            key={index}
                            className={`fa-star ${
                                index < annonce.rating
                                    ? "fa-solid"
                                    : "fa-regular"
                            }`}
                        ></i>
                    ))}
                </section>
            </article>
            <article className="content_info">
                <section className="content_description">
                    <div className="title_detail">
                        <h2>Description</h2>
                        <i className="fa-solid fa-chevron-up"></i>
                    </div>

                    <p>{annonce.description}</p>
                </section>
                <section className="content_equipement">
                    <div className="title_detail">
                        <h2>Équipements</h2>
                        <i className="fa-solid fa-chevron-up"></i>
                    </div>
                    <ul>
                        {annonce.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </section>
            </article>
        </div>
    );
};

export default Annonce;
