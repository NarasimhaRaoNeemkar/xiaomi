import React from 'react';
import { getProducts } from '../utils/storeUtils';
import CardComponent from './CardComponent.jsx';
import SearchComponent from './SearchComponent.jsx';

export default class Ecommerce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toolDetails: {},
            searchLetter: ""
        };
        this.getProducts = this.getProducts.bind(this);
        this.handleSearchCallBack = this.handleSearchCallBack.bind(this);
    }

    getProducts() {
        return getProducts()
            .filter(
                product => this.state.searchLetter === "" || product.name.toLowerCase().includes(this.state.searchLetter.toLowerCase())
            )
            .map(product => (
                <CardComponent
                    key={product.name}
                    product={product}
                />
            ));
    }

    handleSearchCallBack(value) {
        this.setState({searchLetter: value});
    }

    render() {
        return (
            <div>
                <SearchComponent handleSearchCallBack={this.handleSearchCallBack} />
                <h4 className="dataHeader">Products</h4>
                <div className="row dataComponent">
                    <div id="store" className="col-sm-8 cardContainer">
                        {this.getProducts()}
                    </div>
                    {/* <div id="store" className="col-sm-8 cardContainer">
                        {this.getProducts()}
                    </div> */}
                </div>
            </div>
            );
        }
}
