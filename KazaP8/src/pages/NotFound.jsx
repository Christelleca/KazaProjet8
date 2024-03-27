import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <nav>
                {" "}
                <NavLink to="/">Retourner sur la page d'accueil</NavLink>
            </nav>
        </div>
    );
};

export default NotFound;
