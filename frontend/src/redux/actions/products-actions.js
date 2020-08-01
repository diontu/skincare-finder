import {FETCH, FETCHED, TOGGLE, UPDATESEARCH, UPDATESEARCHRESULTS} from './constants';

const path = require('path');
const axios = require('axios');

require('dotenv').config({path: '../../../../.env'});

//TODO: following is used for development
// var domainName = process.env.REACT_APP_DOMAIN_NAME;

//TODO: uncomment when use for production
// var DOMAIN_NAME = process.env.DOMAIN_NAME;

// if (typeof domainName === 'undefined') {
//     domainName = process.env.DOMAIN_NAME;
// }
// axios.defaults.baseURL = String(domainName);

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

    var domainName = process.env.REACT_APP_DOMAIN_NAME;

    if (typeof domainName === 'undefined') {
        domainName = process.env.DOMAIN_NAME;
    }
    axios.defaults.baseURL = String(domainName);

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
};

export const updateSearchValue = (searchValue) => {
    return { 
        type: UPDATESEARCH,
        payload: searchValue
    };
};

//@param results - must be an array of strings of the search results.
const _updateSearchResults = (results) => {
    return {
        type: UPDATESEARCHRESULTS,
        payload: results
    };
}

export const findProductsWithIngredients = (skuId) => {

    var domainName = process.env.REACT_APP_BASE_SEPHORA_DOMAIN;

    if (typeof domainName === 'undefined') {
        domainName = process.env.BASE_SEPHORA_DOMAIN;
    }
    axios.defaults.baseURL = String(domainName);

    return function(dispatch) {
        //calls the backend 
        //SOLUTION: put the initial products into the database and look through the database with the API call based off of skuId
        return axios.get(path.join('sephora', 'ingredients', skuId));
        //update the search results with _updateSearchResults at the end
    };
}