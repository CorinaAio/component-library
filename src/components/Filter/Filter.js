import React from "react";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from "./styles.module.css";

const placeholderFilterItems = [{
  filterName: "t-shirt",
  applied: false
}, {
  filterName: "women clothing",
  applied: true
}, {
  filterName: "red",
  applied: false
}, {
  filterName: "vintage",
  applied: false,
}, {
  filterName: "pants",
  applied: false
}];

export const Filter = ({ filterItems = placeholderFilterItems, align = "vertical"}) => {
    return <div className={`${styles.filterWrapper} ${styles['align'+align]}`}>
        {filterItems.map(item => (
            <div className={styles.filterItem}>
                <FormControlLabel
                    control={<Checkbox name={item.filterName} />}
                    checked={item.applied}
                    label={item.filterName}
                />
            </div>
        ))}
    </div>
};

Filter.customizations = {
    align: "oneOf: horizontal, vertical"
};