import React, {useState} from 'react'
import styles from './styles.module.css';
import { Grid } from '@material-ui/core';
import {Placeholder} from "../../components/Placeholder/Placeholder";
import { Content } from "../../components/Content/Content";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";

export const PrimaryLayout = (props) => {

  const layouComponent  = {
    header1: {
      component: "",
      configuration: {}
    }, 
    header2: {
      component: "",
      configuration: {}
    },
    content: {
      component: "",
      configuration: {}
    },
    sidebar: {
      component: "",
      configuration: {}
    }
  };

  const onDropComponent = (placeholderId, component, configuration) => {
    const newState = {...layouComponent, [placeholderId]: {
      component,
      configuration
    }};
    layouComponent = newState;
  }

  const handleConfigChange = (component) => {}
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
        <Header>
          <Placeholder />
        </Header>
        <Header>
          <Placeholder />
        </Header>
        <Content>
          <Placeholder />
        </Content>
        <Sidebar>
          <Placeholder />
        </Sidebar>
        <Header>
          <Placeholder />
        </Header>
    </Grid>
  )
}
