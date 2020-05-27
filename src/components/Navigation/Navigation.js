import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const placeholderNavItems = [{
  name: "Item 1",
  link: "#"
}, {
  name: "Item 3",
  link: "#"
}, {
  name: "Item 4",
  link: "#"
}];
export const Navigation = ({navigationItems = placeholderNavItems, separator ="/", align = "center"}) => {
    
    return <div className={`${styles.navigation} ${styles['align' + align]}`}>
        {navigationItems.map(item => (
            <div className={styles.navigationItem}>
                <a href={item.link}>{item.name}</a>
                <span className={styles.navigationSeparator}>{separator}</span>
            </div>
        ))}
    </div>
};


Navigation.customizations = {
    // navigationItems: PropTypes.arrayOf(PropTypes.shape({
    //     name: PropTypes.string,
    //     link: PropTypes.string
    // })),
    separator: "type: string",
    align: "oneOf: center, left, right"
};