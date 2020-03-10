import React from 'react';
import ModalView from './ModalView.jsx';
import '../styles/LoginComponent.css';

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: "",
            displayModal: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (document.getElementById("loginId").value && document.getElementById("pwd").value) {
            this.setState({ isValid: true, displayModal: true });
        }
        else {
            this.setState({ isValid: false })
        }
    }

    handleCallback(e) {
        e.preventDefault();
        this.setState({ displayModal: false });
        this.props.history.push("/")
    }

    displayLoginForm() {
        return (
            <div className="loginContainer">
                <form onSubmit={this.handleSubmit}>
                    <label>Login Id : </label>
                    <input type="text" id="loginId" placeholder="Enter Student Id" />
                    <label>Password : </label>
                    <input type="password" id="pwd" placeholder="Enter Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }

    render() {
        console.log("props-->", this.props);
        return (
            <div>
                {this.state.isValid === false && <div className="alert alert-danger prompt">Invalid Credentials</div>}
                {!this.state.isValid && this.displayLoginForm()}
                {this.state.displayModal && <ModalView handleCallback={this.handleCallback} />}
            </div>
        );
    }
}
