import logoKasa from "../assets/images/LOGO.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img src={logoKasa} alt="logo Kasa" />
            <nav>
                <ul>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "underline" : ""
                        }
                    >
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink
                        to="/About"
                        className={({ isActive }) =>
                            isActive ? "underline" : ""
                        }
                    >
                        <li>A propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
