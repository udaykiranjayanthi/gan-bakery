import { combineReducers } from "@reduxjs/toolkit";
import products from './productsSlice';


const rootReducer = combineReducers({
    productsReducer: products,
})

export default rootReducer;