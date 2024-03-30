import logoFooter from "../assets/images/LOGO_black-white.png";

const footer = () => {
    return (
        <div className="footer">
            {" "}
            <img src={logoFooter} alt="Logo footer"></img>
            <div className="footer_txt">
                <p>© 2020 Kasa. All</p>
                <p>rights reserved</p>
            </div>
        </div>
    );
};

export default footer;
