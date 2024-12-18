import { Link } from "react-router-dom";


function Footer() {
    return (

        <>
            <footer className="footer">
                <nav>
                    <ul>
                        <li className="footer__menu-item">
                            <Link to="/" className="footer__menu-link" >A jugar</Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link to="/instructions" className="footer__menu-link active"
                            >¿Cómo se juega?</Link>
                        </li>
                        <li className="footer__menu-item">
                            <a className="footer__menu-link" href="#/options">Más opciones</a>
                        </li>
                    </ul>
                </nav>
                <small className="footer__copy">© Adalab</small>
            </footer>
        </>
    );
}

export default Footer;


