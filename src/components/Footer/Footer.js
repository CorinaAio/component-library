import React from "react";
import styles from './styles.module.css';

export const Footer = ({ copyright = "Copyright footer"})  => {
    return <div className={styles.footer}>{copyright}</div>
} 