import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Slider from "../components/Slider";
import annonces from "../data/annonces.json";
import Collapse from "../components/CollapseComponent";

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
                <Collapse
                    title="Description"
                    content={annonce.description}
                    expanded={descriptionExpanded}
                    toggleExpand={toggleDescriptionExpand}
                />

                <Collapse
                    title="Équipements"
                    content={annonce.equipments}
                    expanded={equipmentsExpanded}
                    toggleExpand={toggleEquipmentsExpand}
                />
            </article>
        </div>
    );
};

export default Annonce;
