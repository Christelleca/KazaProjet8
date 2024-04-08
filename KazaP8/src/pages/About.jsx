import React, { useState } from "react";
import Collapse from "../components/CollapseComponent";

const About = () => {
    const [expandedState, setExpandedState] = useState({
        fiabilite: false,
        respect: false,
        service: false,
        securite: false,
    });

    const toggleExpand = (section) => {
        setExpandedState({
            ...expandedState,
            [section]: !expandedState[section],
        });
    };

    return (
        <div className="about_body">
            <div className="banner_about">
                <img
                    src="src/assets/images/About_img.png"
                    alt="image banner à propos"
                />
            </div>

            <div className="about_content">
                <Collapse
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une Fiabilité totale. Les photos sont conformes aux logements, et toutes les informations régulièrement vérifiées par nos équipes."
                    expanded={expandedState.fiabilite}
                    toggleExpand={() => toggleExpand("fiabilite")}
                />
                <Collapse
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    expanded={expandedState.respect}
                    toggleExpand={() => toggleExpand("respect")}
                />
                <Collapse
                    title="Service"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    expanded={expandedState.service}
                    toggleExpand={() => toggleExpand("service")}
                />
                <Collapse
                    title="Sécurité"
                    content="La Sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    expanded={expandedState.securite}
                    toggleExpand={() => toggleExpand("securite")}
                />
            </div>
        </div>
    );
};

export default About;
