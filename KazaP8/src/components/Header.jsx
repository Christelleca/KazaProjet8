import logoKasa from "../assets/images/LOGO.png";

const Header = () => {
    return (
        <div className="header">
            <img src={logoKasa} alt="logo Kasa" />
            <nav>
                <ul>
                    <li>Acceuil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
