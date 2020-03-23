import React from 'react';
import '../styles/App.css';
import { products } from '../helpers/products';

export default class CartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayDetails = this.displayDetails.bind(this);
        this.displayMessage = this.displayMessage.bind(this);
        this.getProductDetails = this.getProductDetails.bind(this);
    }

    getProductDetails(productDetails) {
        return productDetails.map(product => {
            return (
                <div className="row">
                    <div className="col-sm-4">{product.name}</div>
                    <div className="col-sm-4">{product.price}/- </div>
                </div>
            );
        })
    }

    displayDetails(productDetails) {
        return (
            <div>
                <div><b>Product Details</b></div>
                {this.getProductDetails(productDetails)}
            </div>
        );
    }

    displayMessage() {
        return (
            <div className="container">
                <b>Add the products form left side</b>
            </div>
        );
    }

    render() {
        return (
            <div className="jumbotron" style={{ width: "100%", height: "100%", padding: "10px" }}>
                {this.props.cartDetails.length ? this.displayDetails(this.props.cartDetails) : this.displayMessage()}
            </div>
        );
    }
}
