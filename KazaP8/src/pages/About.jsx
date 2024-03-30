const About = () => {
    return (
        <div className="about_body">
            <div className="banner_about">
                <img
                    src="src/assets/images/About_img.png"
                    alt="image banner à propos"
                />
            </div>

            <div className="about_content">
                <div className="about_section">
                    <div className="about_title">
                        <h2>Fiabilité</h2>
                        <i className="fa-solid fa-chevron-up"></i>
                    </div>
                    <p>
                        Les annonces postées sur Kasa garantissent une Fiabilité
                        totale. Les photos sont conformes aux logements, et
                        toutes les informations régulièrement vérifiées par nos
                        équipes.
                    </p>{" "}
                </div>
                <div className="about_section">
                    <div className="about_title">
                        <h2>Respect</h2>
                        <i className="fa-solid fa-chevron-up"></i>
                    </div>
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>{" "}
                </div>
                <div className="about_section">
                    <div className="about_title">
                        <h2>Service</h2>
                        <i className="fa-solid fa-chevron-up"></i>
                    </div>
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>{" "}
                </div>
                <div className="about_section">
                    <div className="about_title">
                        <h2>Sécurité</h2>
                        <i className="fa-solid fa-chevron-up"></i>
                    </div>
                    <p>
                        La Sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des
                        ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
