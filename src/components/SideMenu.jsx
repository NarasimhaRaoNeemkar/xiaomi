import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.css';

const menuItems = [
    {
        path: '/loginComponent',
        text: "Login Form"
    },
    {
        path: '/ecommerce',
        text: "Ecommerce"
    },
    {
        path: '/news',
        text: "News"
    },
]

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRoute: ""
        }
    }

    render() {
        return (
            <div className="menuItems">
                <h5 className="menuHeader">My App</h5>
                <div>
                    {
                        menuItems.map(item => (
                            <span className={`menuItem ${this.state.selectedRoute === item.text ? "activeMenuItem" : ""}`}
                                key={item.path}
                                onClick={() => this.setState({ selectedRoute: item.text })}>
                                <Link to={item.path}>{item.text}</Link>
                            </span>
                        ))
                    }
                </div>
            </div>
        );
    }
}
