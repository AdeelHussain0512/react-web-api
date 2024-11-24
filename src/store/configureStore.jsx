import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../store/cart";


export const store= configureStore({
    reducer:{
        products: ProductReducer,   
    }
});