import { fetchedProducts, products, normalSearch, careSearch, searchValue, searchResults } from './fetched-products-reducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    hasFetchedProducts: fetchedProducts,
    products,
    normalSearch,
    careSearch,
    searchValue,
    searchResults //have not used yet
});

export default allReducers;