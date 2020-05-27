import React from "react";
import styles from "./styles.module.css";
import { Grid } from '@material-ui/core';

export const Header = (props) => {
    return (
    <Grid xs={12}>
    <div className={styles.wrapper}>
        {props.children}
    </div>
    </Grid>
    )
}