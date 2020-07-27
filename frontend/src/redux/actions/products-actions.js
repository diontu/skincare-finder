import {FETCH, FETCHED} from './constants';
const axios = require('axios');

const _fetchProducts = () => {
    return {
        type: FETCH
    };
};

const _fetchedProducts = (prods) => {
    return {
        type: FETCHED,
        payload: prods
    };
};

export const fetch = () => {
    return function(dispatch) {
        dispatch(_fetchProducts());

        return axios.get('http://localhost:5000/products/sephora')
            .then(prods => {
                dispatch(_fetchedProducts(prods));
            })
            .catch(err => {
                console.log(err);
            });
    };
};