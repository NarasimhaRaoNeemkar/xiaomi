import { combineReducers } from 'redux';

const processAddToCart = (cartDetails, product) => {
    let newCartDetails = [...cartDetails];
    if (newCartDetails.length) {
        let index = newCartDetails.findIndex(data => data.name === product.name);
        if(index !== -1) {
            newCartDetails[index].quantity = newCartDetails[index].quantity + 1;
        } else {
            newCartDetails = [...newCartDetails, product];
        }
    }
    else {
        newCartDetails = [...newCartDetails, product];
    }

    return newCartDetails;
}

const cartDetails = (cartDetails = [], action) => {
    switch (action.type) {
        case "addToCart":
            let newCartDetails = processAddToCart(cartDetails, action.payload);
            return [...newCartDetails];
        default:
            return cartDetails;
    }
}

export default combineReducers({
    cartDetails
});
