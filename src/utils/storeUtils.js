import { products } from '../helpers/products';

function sortProducts(products) {
    return products.sort(function(a, b) {
        if(a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
        else if(a.name.toLowerCase() < b.name.toLowerCase())
            return -1;
        else
            return 0;
    });
}

export const getProducts = () => {
    return sortProducts(products);
}

