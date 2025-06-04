// src/components/InfoCard/InfoCard.jsx
import React from 'react';
import styles from './InfoCard.module.css';

const InfoCard = ({ icon, title, children }) => {
    return (
        <div className={`${styles.infoCard} card h-100 border-0 shadow-sm`}>
            <div className="card-body text-center p-4">
                <div className={styles.iconContainer}>
                    {icon}
                </div>
                <h5 className="card-title mt-3">{title}</h5>
                <p className="card-text">{children}</p>
            </div>
        </div>
    );
};

export default InfoCard;