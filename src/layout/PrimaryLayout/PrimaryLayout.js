import React from 'react'
import styles from './styles.module.css';
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { Content } from "../../components/Content/Content";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Banner } from "../../components/Banner/Banner";
import { ProductList } from "../../components/ProductList/ProductList";
import { Filter } from "../../components/Filter/Filter";
import { Grid } from '@material-ui/core';

export const PrimaryLayout = (props) => {

  const bannerSrc = "data:image/jpeg;base64,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";

  // return (
  //   <Grid container justify="center" className={styles.wrapper}>
  //       <Grid xs={12}>
  //         <Banner />
  //       </Grid>
  //       <Grid xs={12}>
  //         <Navigation></Navigation>
  //       </Grid>
  //       <Grid xs={12} sm={8}>
  //         <Content>
  //           <ProductList />
  //         </Content>
  //       </Grid>
  //       <Grid xs={12} sm={4}>
  //         <Sidebar>
  //           <Filter/>
  //         </Sidebar>
  //       </Grid>
  //       <Grid xs={12}>
  //         <Footer copyright="© 2020 FlyingHamster"></Footer>
  //       </Grid>
  //   </Grid>
  // )

  return (
    <Grid container justify="center" className={styles.wrapper}>
        <Grid xs={12}>
          <Banner />
        </Grid>
        <Grid xs={12}>
          <Navigation></Navigation>
        </Grid>
        <Grid xs={12} sm={8}>
          <Content>
            <ProductList />
          </Content>
        </Grid>
        <Grid xs={12} sm={4}>
          <Sidebar>
            <Filter/>
          </Sidebar>
        </Grid>
        <Grid xs={12}>
          <Footer copyright="© 2020 FlyingHamster"></Footer>
        </Grid>
    </Grid>
  )
}