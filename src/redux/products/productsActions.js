import { SET_PRODUCTS } from './productsTypes';

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    }
}