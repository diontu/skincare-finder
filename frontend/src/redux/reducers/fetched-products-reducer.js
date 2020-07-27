import {FETCH, FETCHED} from '../actions/constants';

export const fetchedProducts = (state = false, action) => {
    switch (action.type) {
        case FETCH:
            return false;
        case FETCHED: 
            return true;
        default: 
            return state;
    }
};

export const products = (state = [], action) => {
    switch (action.type) {
        case FETCHED: 
            return action.payload;
        default: 
            return state;
    }
};