import React from "react";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import styles from "./styles.module.css";


const  placeholderProductList = [{
    title: "Woolie skirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUe1Z9DmyFtbmfwZXMKUbCyPsXduKjqYJOR1wezjdfAcjvzJrL&usqp=CAU",
    price: "20"
  }, {
    title: "Lolo pants",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf2stUo6pA7KuZAKoHIq3bvs91DmGnb-Xx3hgN1jrgDUehfWTVsXegRDYD9V4&usqp=CAc",
    price: "34.55"
  }, {
    title: "Woo woo blouse",
    img: "https://anninc.scene7.com/is/image/LO/525075_3343?$pdp2x$",
    price: "26.5"
  }, {
    title: "Woolie skirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUe1Z9DmyFtbmfwZXMKUbCyPsXduKjqYJOR1wezjdfAcjvzJrL&usqp=CAU",
    price: "20"
  }, {
    title: "Lolo pants",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf2stUo6pA7KuZAKoHIq3bvs91DmGnb-Xx3hgN1jrgDUehfWTVsXegRDYD9V4&usqp=CAc",
    price: "34.55"
  }, {
    title: "Woo woo blouse",
    img: "https://anninc.scene7.com/is/image/LO/525075_3343?$pdp2x$",
    price: "26.5"
  }, {
    title: "Woolie skirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUe1Z9DmyFtbmfwZXMKUbCyPsXduKjqYJOR1wezjdfAcjvzJrL&usqp=CAU",
    price: "20"
  }, {
    title: "Lolo pants",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf2stUo6pA7KuZAKoHIq3bvs91DmGnb-Xx3hgN1jrgDUehfWTVsXegRDYD9V4&usqp=CAc",
    price: "34.55"
  }, {
    title: "Woo woo blouse",
    img: "https://anninc.scene7.com/is/image/LO/525075_3343?$pdp2x$",
    price: "26.5"
  }];

export const ProductList = ({products = placeholderProductList}) => {
    return (
        <div className={styles.wrapper}>
            <GridList cellHeight={180} className={styles.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Products</ListSubheader>
                </GridListTile>
                {products.map((product) => (
                    <GridListTile key={product.img}>
                        <img src={product.img} alt={product.title} />
                        <GridListTileBar
                            title={product.title}
                            subtitle={<span>€ {product.price}</span>}
                        />
                    </GridListTile>
                ))}
        </GridList>
      </div>
    )
}