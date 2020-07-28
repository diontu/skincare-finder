import {FETCH, FETCHED} from './constants';

const path = require('path');
const axios = require('axios');

require('dotenv').config({path: '../../../../.env'});

var DOMAIN_NAME = process.env.REACT_APP_DOMAIN_NAME;

if (process.env.MODE === 'prod') {
    DOMAIN_NAME = process.env.DOMAIN_NAME;
}

axios.defaults.baseURL = String(DOMAIN_NAME);

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

        return axios.get(path.join('products', 'sephora'))
            .then(prods => {
                dispatch(_fetchedProducts(prods));
            })
            .catch(err => {
                console.log(err);
            });
    };
};