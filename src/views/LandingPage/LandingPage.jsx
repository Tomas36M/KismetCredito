// src/views/LandingPage/LandingPage.jsx
import React from 'react';
import Header from '../../components/Header/Header';
import Calculator from '../../components/Calculator/Calculator';
import InfoCard from '../../components/InfoCard/InfoCard';
import Footer from '../../components/Footer/Footer';
import styles from './LandingPage.module.css';

// Iconos para las tarjetas informativas
const CreditIcon = () => <i className="bi bi-cash-coin"></i>;
const ClockIcon = () => <i className="bi bi-clock"></i>;
const ShieldIcon = () => <i className="bi bi-shield-check"></i>;

const LandingPage = () => {
    return (
        <div className={styles.landingPage}>
            <Header />

            {/* Hero Section */}
            <section className={`${styles.hero} py-5`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className={styles.heroTitle}>
                                Obtén el crédito que necesitas de forma <span className={styles.highlight}>rápida y segura</span>
                            </h1>
                            <p className={styles.heroSubtitle}>
                                Con Kismet Credito, accede a préstamos personalizados con tasas competitivas y plazos flexibles que se adaptan a tus necesidades.
                            </p>
                            <div className="d-flex gap-3">
                                <button className="btn btn-primary btn-lg px-4 py-2">
                                    Solicitar ahora
                                </button>
                                <button className="btn btn-outline-primary btn-lg px-4 py-2">
                                    Conoce más
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Calculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className={`${styles.infoSection} py-5 bg-light`}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className={styles.sectionTitle}>¿Por qué elegir Kismet Credito?</h2>
                        <p className={styles.sectionSubtitle}>Ofrecemos la mejor experiencia en créditos personales</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <InfoCard icon={<CreditIcon />} title="Tasas Competitivas">
                                Ofrecemos las mejores tasas del mercado, adaptadas a tu perfil crediticio y necesidades específicas.
                            </InfoCard>
                        </div>
                        <div className="col-md-4">
                            <InfoCard icon={<ClockIcon />} title="Aprobación Rápida">
                                Recibe una respuesta en menos de 24 horas y el dinero en tu cuenta en el mismo día de aprobación.
                            </InfoCard>
                        </div>
                        <div className="col-md-4">
                            <InfoCard icon={<ShieldIcon />} title="Seguridad Garantizada">
                                Tus datos están protegidos con los más altos estándares de seguridad y encriptación bancaria.
                            </InfoCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className={`${styles.processSection} py-5`}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className={styles.sectionTitle}>Cómo funciona nuestro crédito</h2>
                        <p className={styles.sectionSubtitle}>Solo sigue estos simples pasos</p>
                    </div>

                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <div className={`${styles.processStep} text-center p-4`}>
                                <div className={styles.stepNumber}>1</div>
                                <h5 className="mt-3">Calcula tu crédito</h5>
                                <p>Usa nuestra calculadora para simular tu préstamo</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={`${styles.processStep} text-center p-4`}>
                                <div className={styles.stepNumber}>2</div>
                                <h5 className="mt-3">Completa el formulario</h5>
                                <p>Proporciona tus datos básicos en nuestro formulario seguro</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={`${styles.processStep} text-center p-4`}>
                                <div className={styles.stepNumber}>3</div>
                                <h5 className="mt-3">Espera la aprobación</h5>
                                <p>Recibirás una respuesta en menos de 24 horas</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={`${styles.processStep} text-center p-4`}>
                                <div className={styles.stepNumber}>4</div>
                                <h5 className="mt-3">Recibe tu dinero</h5>
                                <p>El monto aprobado será depositado en tu cuenta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={`${styles.faqSection} py-5 bg-light`}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className={styles.sectionTitle}>Preguntas Frecuentes</h2>
                        <p className={styles.sectionSubtitle}>Encuentra respuestas a tus dudas</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                            ¿Cuáles son los requisitos para solicitar un crédito?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Necesitas ser mayor de edad, tener una identificación oficial vigente, comprobante de domicilio y comprobante de ingresos. También es necesario tener una cuenta bancaria a tu nombre.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                            ¿Cuál es el monto mínimo y máximo que puedo solicitar?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            El monto mínimo es de $500 USD y el máximo de $50,000 USD. El monto aprobado dependerá de tu capacidad de pago y perfil crediticio.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                            ¿Qué pasa si no puedo realizar un pago?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Te recomendamos comunicarte con nuestro departamento de atención a clientes antes de la fecha de pago. Podemos ofrecerte opciones como reestructurar tu deuda o extender el plazo, sujeto a condiciones.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;