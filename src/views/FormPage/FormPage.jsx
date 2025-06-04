// src/views/FormPage/FormPage.jsx
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './FormPage.module.css';

const FormPage = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        monto: '',
        plazo: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
        setSubmitted(true);
    };

    return (
        <div className={styles.formPage}>
            <Header />

            <main className={`${styles.mainContent} py-5`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className={`${styles.formCard} card border-0 shadow`}>
                                <div className="card-body p-4 p-md-5">
                                    <div className="text-center mb-5">
                                        <h1 className={styles.formTitle}>Solicita tu crédito</h1>
                                        <p className={styles.formSubtitle}>Completa el formulario y un asesor se pondrá en contacto contigo</p>
                                    </div>

                                    {submitted ? (
                                        <div className={`${styles.successMessage} text-center py-5`}>
                                            <div className={styles.successIcon}>
                                                <i className="bi bi-check-circle"></i>
                                            </div>
                                            <h3 className="mt-4">¡Solicitud enviada con éxito!</h3>
                                            <p className="text-muted mt-3">
                                                Hemos recibido tu solicitud de crédito. Un asesor se pondrá en contacto contigo
                                                en las próximas 24 horas para continuar con el proceso.
                                            </p>
                                            <a href="/" className="btn btn-primary mt-4 px-4">
                                                Volver al inicio
                                            </a>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-4">
                                                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nombre"
                                                    name="nombre"
                                                    value={formData.nombre}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="telefono"
                                                        name="telefono"
                                                        value={formData.telefono}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="direccion" className="form-label">Dirección completa</label>
                                                <textarea
                                                    className="form-control"
                                                    id="direccion"
                                                    name="direccion"
                                                    rows="3"
                                                    value={formData.direccion}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>

                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <label htmlFor="monto" className="form-label">Monto solicitado (USD)</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="monto"
                                                        name="monto"
                                                        min="500"
                                                        max="50000"
                                                        value={formData.monto}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="plazo" className="form-label">Plazo en días</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="plazo"
                                                        name="plazo"
                                                        min="7"
                                                        max="180"
                                                        value={formData.plazo}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="terminos"
                                                        required
                                                    />
                                                    <label className="form-check-label" htmlFor="terminos">
                                                        Acepto los <a href="#">términos y condiciones</a> y la <a href="#">política de privacidad</a>
                                                    </label>
                                                </div>
                                            </div>

                                            <button type="submit" className={`${styles.submitBtn} btn btn-primary w-100 py-3`}>
                                                Enviar solicitud
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FormPage;