import { products } from "../helpers/products"

export const addToCart = (product) => {
    let productDetails = {
        name: product.name,
        price: product.price
    }
    return {
        type: "addToCart",
        payload: productDetails
    }
}

