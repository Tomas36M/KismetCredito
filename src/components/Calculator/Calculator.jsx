// src/components/Calculator/Calculator.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Calculator.module.css';

const Calculator = () => {
    const [monto, setMonto] = useState(10000);
    const [dias, setDias] = useState(30);
    const [resultado, setResultado] = useState(null);
    const navigate = useNavigate();

    const calcularCredito = () => {
        // Lógica de cálculo de crédito (datos random por ahora)
        const tasaInteres = 0.12; // 12% de interés mensual
        const comision = 0.05; // 5% de comisión

        const interes = monto * tasaInteres * (dias / 30);
        const comisionTotal = monto * comision;
        const totalAPagar = monto + interes + comisionTotal;
        const pagoDiario = totalAPagar / dias;

        setResultado({
            montoSolicitado: monto,
            dias,
            tasaInteres: tasaInteres * 100,
            comision: comision * 100,
            totalAPagar,
            pagoDiario
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calcularCredito();
    };

    const handleAceptar = () => {
        navigate('/formulario');
    };

    return (
        <div className={`${styles.calculator} card shadow`}>
            <div className="card-body">
                <h2 className="card-title text-center mb-4">Calcula tu crédito</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="monto" className="form-label">
                            Monto que necesitas (USD)
                            <span className="text-muted"> (entre $500 y $50,000)</span>
                        </label>
                        <input
                            type="range"
                            className="form-range"
                            min="500"
                            max="50000"
                            step="100"
                            id="monto"
                            value={monto}
                            onChange={(e) => setMonto(Number(e.target.value))}
                        />
                        <div className="d-flex justify-content-between">
                            <small>$500</small>
                            <strong>${monto.toLocaleString()}</strong>
                            <small>$50,000</small>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="dias" className="form-label">
                            Plazo en días
                            <span className="text-muted"> (entre 7 y 180 días)</span>
                        </label>
                        <input
                            type="range"
                            className="form-range"
                            min="7"
                            max="180"
                            id="dias"
                            value={dias}
                            onChange={(e) => setDias(Number(e.target.value))}
                        />
                        <div className="d-flex justify-content-between">
                            <small>7 días</small>
                            <strong>{dias} días</strong>
                            <small>180 días</small>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 py-2">
                        Calcular Crédito
                    </button>
                </form>

                {resultado && (
                    <div className={`${styles.result} mt-4 p-3 rounded`}>
                        <h5 className="text-center mb-3">Resultado de tu crédito</h5>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Monto solicitado:</span>
                            <strong>${resultado.montoSolicitado.toLocaleString()}</strong>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Plazo:</span>
                            <strong>{resultado.dias} días</strong>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Tasa de interés:</span>
                            <strong>{resultado.tasaInteres}%</strong>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Comisión:</span>
                            <strong>{resultado.comision}%</strong>
                        </div>
                        <hr className="my-3" />
                        <div className="d-flex justify-content-between mb-2">
                            <span>Total a pagar:</span>
                            <strong>${resultado.totalAPagar.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Pago diario:</span>
                            <strong>${resultado.pagoDiario.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
                        </div>

                        <button
                            className={`${styles.acceptBtn} btn btn-success w-100 mt-4 py-2`}
                            onClick={handleAceptar}
                        >
                            Aceptar y continuar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;