import React from 'react';
import '../styles/App.css';

export default class CartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayDetails = this.displayDetails.bind(this);
        this.displayMessage = this.displayMessage.bind(this);
    }

    displayDetails(productDetails) {
        return (
            <div>Product Details</div>
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
        console.log("products-->", this.props)
        return (
            <div className="jumbotron" style={{width: "100%", height: "100%"}}>
                {this.displayMessage()}
            </div>
        );
    }
}
