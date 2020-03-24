export const productTotals = cartDetails => {
    let totalQuantity = 0, totalPrice = 0;
    cartDetails.forEach(product => {
        totalPrice = totalPrice + (product.quantity * product.price);
        totalQuantity = totalQuantity + product.quantity;
    });

    return {
        totalPrice,
        totalQuantity
    }
} 
