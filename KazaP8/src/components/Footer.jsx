import logoFooter from "../assets/images/LOGO_black-white.png";

const footer = () => {
    return (
        <div className="footer">
            {" "}
            <img src={logoFooter} alt="Logo footer"></img>
            <p>© 2020 Kasa. All</p>
            <p>rights reserved</p>
        </div>
    );
};

export default footer;
