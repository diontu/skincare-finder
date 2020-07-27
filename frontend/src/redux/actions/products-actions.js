import {FETCH, FETCHED} from './constants';

const path = require('path');
const axios = require('axios');

require('dotenv').config({path: '../../../../.env'});

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

        return axios.get(path.join(String(process.env.DOMAIN_NAME), 'products', 'sephora'))
            .then(prods => {
                dispatch(_fetchedProducts(prods));
            })
            .catch(err => {
                console.log(err);
            });
    };
};