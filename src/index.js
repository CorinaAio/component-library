import React from 'react'

// import { PrimaryLayout } from "./layout/PrimaryLayout/PrimaryLayout";
import { Banner } from "./components/Banner/Banner";
import { Filter } from "./components/Filter/Filter";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { ProductList } from "./components/ProductList/ProductList";


// const layouts = [{
//     name: "Primary Layout",
//     component: PrimaryLayout,
// }];

const layouts = [];

const components = [{
    name: "Banner",
    component: Banner
},, {
    name: "Filter",
    component: Filter
}, {
    name: "Footer",
    component: Footer
}, {
    name: "Navigation",
    component: Navigation
}, {
    name: "Product List",
    component: ProductList
}];

export { layouts, components };
