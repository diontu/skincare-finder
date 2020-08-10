import {searchLoaded, searchNotLoaded, updateSearchResults} from './../../redux/actions/products-actions';
import store from './../../redux/store';
import path from 'path';
import axios from 'axios';

//all these services are redux-actions.

export const matchSearchValuesWithProductName = () => {
    // let searchVal = store.getState().searchValues[0]; // if searching for only the productname, then it's the first index of the array

    return dispatch => {
        dispatch(searchNotLoaded());

        let searchVal = store.getState().searchValues[0];

        let searchResults = [];

        let products = store.getState().products;
        console.log(products);

        products.data.forEach((product) => {
            let data = {
                productName: product.productName,
                brandName: product.brandName,
                starRatings: product.starRatings,
                image: product.image,
                skuId: product.skuId,
                targetUrl: product.targetUrl,
                // matched: false
            };

            let regex = new RegExp(searchVal, 'i');

            if (product.productName.match(regex)) {
                // data.matched = true;
                searchResults.push(data);
            }
        });



        dispatch(updateSearchResults(searchResults));
        dispatch(searchLoaded());
    };
};

export const matchSearchValuesWithIngredients = () => {

    let searchValues = store.getState().searchValues;

    return dispatch => {
        dispatch(searchNotLoaded());

        let searchResults = [];

        let productsIngredients = store.getState().productsIngredients;
        productsIngredients.data.forEach((productIngredients) => {
            let data = {
                productName: productIngredients.productName,
                brandName: productIngredients.brandName,
                starRatings: productIngredients.starRatings,
                image: productIngredients.image,
                skuId: productIngredients.skuId,
                targetUrl: productIngredients.targetUrl,
            };
            data.matches = [];

            productIngredients.ingredients.forEach((ingredient) => {
                searchValues.forEach((searchVal) => {
                    let regex = new RegExp(searchVal, 'i');
                    if (ingredient.match(regex)) {
                        data.matches.push(ingredient);
                    }
                });
            })
            if (data.matches.length != 0)  {
                searchResults.push(data);
            }
        });

        dispatch(updateSearchResults(searchResults));
        dispatch(searchLoaded());
    };
};

export const sendEmail = ({name, email, message}) => {
    //here is where i make the axios post call
    var domainName = process.env.REACT_APP_DOMAIN_NAME;

    if (typeof domainName === 'undefined') {
        domainName = process.env.DOMAIN_NAME;
    }
    axios.defaults.baseURL = String(domainName);

    console.log('entered email');

    return async dispatch => {
        // set the state of SENDINGEMAIL to true and use this state to load the loading overlay
        await axios.post(path.join('contact', 'send'), {name, email, message})
            .then((res) => {
                console.log('entered req');
            })
            .catch((err) => {

            });
    };
};