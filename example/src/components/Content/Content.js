import React from 'react'
import styles from "./styles.module.css";
import Grid from "@material-ui/core/Grid";

export const Content = (props) => {
  return (
    <Grid xs={12} sm={8}>
      <div className={styles.wrapper}>{props.children}</div>
    </Grid>
  )
};
