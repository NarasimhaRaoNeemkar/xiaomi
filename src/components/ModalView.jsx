import React from 'react';
import '../styles/ModalView.css';

export default class ModalView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="backDropStyle">
                <div className="modalStyle">
                    <b>Successfully Logged In.</b> Please click on <b>Ok</b> to continue...
                    <div className="footer">
                        {this.props.handleCallback && <button className="btn btn-info btn-md" onClick={this.props.handleCallback}>Ok</button>}
                    </div>
                </div>
            </div>
        );
    }
}
