import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={`${styles.header} navbar navbar-expand-lg navbar-light bg-light`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <span className={styles.logo}>Kismet Credito</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/formulario">Solicitar Crédito</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;