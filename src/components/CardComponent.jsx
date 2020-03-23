import React from 'react';
import '../styles/Card.css';

export default class CardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("props-->", this.props);
        let { name, description, image, price } = this.props.product;
        return (
            <div className="card">
                <img className="card-img-top imageComponent" src={image} alt={name} />
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <button className="cardButton" onClick={() => { this.props.addToCart(this.props.product) }}>Add</button>
                </div>
            </div>
        );
    }
}
