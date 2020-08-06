import { fetchedProducts, products, normalSearch, careSearch, searchValues, searchResults, loadedSearchResults, productsIngredients, fetchingIngredients } from './fetched-products-reducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    hasFetchedProducts: fetchedProducts,
    products,
    normalSearch,
    careSearch,
    searchValues,
    searchResults, 
    loadedSearchResults,
    productsIngredients,
    fetchingIngredients
});

export default allReducers;