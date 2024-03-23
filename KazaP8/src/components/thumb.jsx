import PropTypes from "prop-types";

const Thumb = ({ annonces }) => {
    return annonces.map((annonce) => (
        <div className="thumb" key={annonce.id}>
            <img src={annonce.cover} alt={annonce.title} />
            <h2>{annonce.title}</h2>
        </div>
    ));
};
Thumb.PropTypes = {
    annonces: PropTypes.array.isRequired,
};

export default Thumb;
