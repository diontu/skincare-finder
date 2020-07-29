import {FETCH, FETCHED, TOGGLE} from '../actions/constants';

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

export const normalSearch = (state = true, action) => {
    switch (action.type) {
        case TOGGLE:
            return !state;
        default:
            return state;
    }
}

export const careSearch = (state = false, action) => {
    switch (action.type) {
        case TOGGLE:
            return !state;
        default:
            return state;
    }
}