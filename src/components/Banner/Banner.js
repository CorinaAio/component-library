import React from "react";
import styles from './styles.module.css';

const defaultImg = "https://media-exp1.licdn.com/dms/image/C4D1BAQEeKhr38yLn8A/company-background_10000/0?e=2159024400&v=beta&t=4zMFJASeUijwMoPdhSbVkr__n8kCA5pfqUdzJD95djs";

export const Banner = ({ imgSrc = defaultImg}) => {
    return <div style={{backgroundImage: `url(${imgSrc})`}} className={styles.banner}>
    </div>
};

Banner.customizations = {
    imgSrc: "type: string"
};