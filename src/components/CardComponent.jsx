import React from 'react';
import '../styles/Card.css';

export default class CardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { name, description, image, price } = this.props.product;
        return (
            <div className="card" onClick={() => { this.props.callBack(this.props.item) }}>
                <img className="card-img-top imageComponent" src={image} alt={name} />
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <button className="cardButton">Add</button>
                </div>
            </div>
        );
    }
}
