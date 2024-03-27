const Slider = ({ pictures }) => {
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
        <div className="pictures">
            <img
                src={pictures[currentImageIndex]}
                alt={pictures[currentImageIndex].title}
                key={pictures[currentImageIndex]}
            />
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
    );
};

export default Slider;
