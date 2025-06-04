// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} py-5 bg-light`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5 className={styles.footerTitle}>Kismet Credito</h5>
                        <p className={styles.footerText}>
                            Ofrecemos soluciones financieras rápidas y confiables para ayudarte a alcanzar tus metas.
                        </p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className={styles.footerTitle}>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className={styles.footerLink}>Inicio</a></li>
                            <li><a href="#" className={styles.footerLink}>Solicitar crédito</a></li>
                            <li><a href="#" className={styles.footerLink}>Términos y condiciones</a></li>
                            <li><a href="#" className={styles.footerLink}>Política de privacidad</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className={styles.footerTitle}>Contáctanos</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <i className="bi bi-geo-alt me-2"></i>
                                Av. Principal 123, Ciudad
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-telephone me-2"></i>
                                +1 (123) 456-7890
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-envelope me-2"></i>
                                info@credifacil.com
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="text-center">
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Kismet Credito. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;