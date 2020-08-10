import {FETCH, FETCHED, TOGGLE, UPDATESEARCH, UPDATESEARCHRESULTS, SEARCHLOADED, SEARCHNOTLOADED, FETCHINGREDIENTS, FETCHEDINGREDIENTS} from './constants';

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

export const fetchInitial = () => {

    var domainName = process.env.DOMAIN_NAME;

    if (typeof domainName === 'undefined') {
        // domainName = process.env.REACT_APP_DOMAIN_NAME; //--- uncomment for development
    }
    // axios.defaults.baseURL = String(domainName); //--- uncomment for development

    return function(dispatch) {
        dispatch(_fetchProducts());

        return axios.get(path.join('api', 'products', 'sephora'))
            .then(prods => {
                dispatch(_fetchedProducts(prods));
                dispatch(updateSearchResults(prods.data));
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

//@param searchValue - must be an array of the search values
export const updateSearchValue = (searchValue) => {
    return { 
        type: UPDATESEARCH,
        payload: searchValue
    };
};

//@param results - must be an array of strings of the search results. -- NOT USED
export const updateSearchResults = (results) => {
    return {
        type: UPDATESEARCHRESULTS,
        payload: results
    };
}

export const searchLoaded = () => {
    return {
        type: SEARCHLOADED,
    };
}

export const searchNotLoaded = () => {
    return {
        type: SEARCHNOTLOADED,
    };
}

const _fetchingIngredients = () => {
    return {
        type: FETCHINGREDIENTS,
    };
}

const _fetchedIngredients = (productIngredients) => {
    return {
        type: FETCHEDINGREDIENTS,
        payload: productIngredients
    };
}

export const findAllProductsWithIngredients = () => {
    var domainName = process.env.DOMAIN_NAME;

    if (typeof domainName === 'undefined') {
        // domainName = process.env.REACT_APP_DOMAIN_NAME; //--- uncomment for development
    }
    // axios.defaults.baseURL = String(domainName); //--- uncomment for development

    return function(dispatch) {
        dispatch(_fetchingIngredients());

        return axios.get(path.join('api', 'products', 'sephora', 'ingredients', 'all'))
            .then(productIngredients => {
                dispatch(_fetchedIngredients(productIngredients));
            })
            .catch(err => {
                console.log(err);
            });
        //update the search results with _updateSearchResults at services.js
    };
}

export const sendEmailAction = ({name, email, message}) => {
    //here is where i make the axios post call
    var domainName = process.env.DOMAIN_NAME; 

    if (typeof domainName === 'undefined') {
        // domainName = process.env.REACT_APP_DOMAIN_NAME; //--- uncomment for development
    }
    // axios.defaults.baseURL = String(domainName); //--- uncomment for development

    console.log('entered email');

    return async dispatch => {
        // set the state of SENDINGEMAIL to true and use this state to load the loading overlay
        await axios.post(path.join('api', 'contact', 'send'), {name, email, message})
            .then((res) => {
                console.log('entered req');
            })
            .catch((err) => {

            });
    };
};