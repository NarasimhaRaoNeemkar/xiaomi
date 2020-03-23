import React from 'react';

export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form-inline">
                <label className="mr-sm-2">Search by Product Name: </label>
                <input id="productName"
                    name="searchLetter"
                    type="text"
                    onChange={e => this.props.handleSearchCallBack(e.target.value)}
                    placeholder="Product Name"
                    className="form-control mb-2 mr-sm-2"
                />
            </form>
        );
    }
}
