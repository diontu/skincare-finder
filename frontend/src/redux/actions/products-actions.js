import {FETCH, FETCHED, TOGGLE} from './constants';

const path = require('path');
const axios = require('axios');

require('dotenv').config({path: '../../../../.env'});

//TODO: following is used for development
var domainName = process.env.REACT_APP_DOMAIN_NAME;

//TODO: uncomment when use for production
// var DOMAIN_NAME = process.env.DOMAIN_NAME;

if (typeof domainName === 'undefined') {
    domainName = process.env.DOMAIN_NAME;
}

axios.defaults.baseURL = String(domainName);

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

export const toggleSearch = () => {
    return {
        type: TOGGLE
    };
}