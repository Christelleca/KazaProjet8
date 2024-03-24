import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Thumb = ({ annonces }) => {
    return annonces.map((annonce) => (
        <Link to={`/annonce/${annonce.id}`} className="thumb" key={annonce.id}>
            <img src={annonce.cover} alt={annonce.title} />
            <h2>{annonce.title}</h2>
        </Link>
    ));
};
Thumb.PropTypes = {
    annonces: PropTypes.array.isRequired,
};

export default Thumb;
