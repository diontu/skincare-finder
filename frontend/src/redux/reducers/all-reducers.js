import { fetchedProducts, products, normalSearch, careSearch } from './fetched-products-reducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    hasFetchedProducts: fetchedProducts,
    products,
    normalSearch,
    careSearch
});

export default allReducers;