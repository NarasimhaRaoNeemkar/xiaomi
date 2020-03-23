import { combineReducers } from 'redux';

const processRemoveProduct = state => {

}

const cartDetails = (state = [], action) => {
    switch (action.type) {
        case "addToCart": 
            return [...state, action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    cartDetails
});
