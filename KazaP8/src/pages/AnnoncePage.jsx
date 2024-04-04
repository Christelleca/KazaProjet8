import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Slider from "../components/Slider";
import annonces from "../data/annonces.json";

const findAnnonceID = (id) => {
    return annonces.find((annonce) => annonce.id === id);
};

const Annonce = () => {
    const { id } = useParams();
    const annonce = findAnnonceID(id);
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);
    const [equipmentsExpanded, setEquipmentsExpanded] = useState(false);

    const toggleDescriptionExpand = () => {
        setDescriptionExpanded(!descriptionExpanded);
    };

    const toggleEquipmentsExpand = () => {
        setEquipmentsExpanded(!equipmentsExpanded);
    };

    if (!annonce) {
        return <NotFound />;
    }

    return (
        <div className="annonce_content">
            <Slider pictures={annonce.pictures} />
            <article className="info_host">
                <section className="host_title_detail">
                    <h1>{annonce.title}</h1>
                    <h2>{annonce.location}</h2>

                    <div className="content_tag">
                        {annonce.tags.map((tag, index) => (
                            <div className="tags" key={index}>
                                <p>{tag}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="host_rating_img">
                    <div className="host_img_name">
                        <p>{annonce.host.name}</p>
                        <img
                            src={annonce.host.picture}
                            alt={annonce.host.name}
                        />
                    </div>
                    <div className="rating_star">
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
                    </div>
                </section>
            </article>
            <article className="content_info">
                <section className="content_description">
                    <div
                        className="title_detail"
                        onClick={toggleDescriptionExpand}
                    >
                        <h2>Description</h2>
                        <i
                            className={`fa-solid fa-chevron-up ${
                                descriptionExpanded ? "rotate" : ""
                            }`}
                        ></i>
                    </div>
                    <div
                        className={`content_detail ${
                            descriptionExpanded ? "show" : ""
                        }`}
                    >
                        <p>{annonce.description}</p>
                    </div>
                </section>
                <section className="content_equipement">
                    <div
                        className="title_detail"
                        onClick={toggleEquipmentsExpand}
                    >
                        <h2>Équipements</h2>
                        <i
                            className={`fa-solid fa-chevron-up ${
                                equipmentsExpanded ? "rotate" : ""
                            }`}
                        ></i>
                    </div>
                    <div
                        className={`content_detail ${
                            equipmentsExpanded ? "show" : ""
                        }`}
                    >
                        <ul className="equipment_list">
                            {annonce.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default Annonce;
