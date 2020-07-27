import { fetchedProducts, products} from './fetched-products-reducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    hasFetchedProducts: fetchedProducts,
    products,
});

export default allReducers;