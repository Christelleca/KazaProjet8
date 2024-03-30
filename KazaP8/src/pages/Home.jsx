import Thumb from "../components/Thumb";
import annonces from "../data/annonces.json";

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img
                    src="src/assets/images/header_home.png"
                    alt="image banner accueil"
                />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="concent_gallery">
                <div className="gallery">
                    <Thumb annonces={annonces} />
                </div>
            </div>
        </div>
    );
};

export default Home;
