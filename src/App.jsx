import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SideMenu from './components/SideMenu.jsx';
import Home from './components/HomeComponent.jsx';
import LoginComponent from './components/LoginComponent.jsx';

import './styles/App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="appContainer">
                <BrowserRouter>
                    <div>
                        <SideMenu {...this.props} />
                    </div>
                    <div className="bodyContainer">
                        <div className="dataContainer">
                            <Switch>
                                <Route path="/loginComponent" component={LoginComponent} />
                                <Route path="/usersProfile" component={(<div>Users</div>)} />
                                <Route path="/shoppingCart" component={<div>Shopping Cart</div>} />
                                <Route path="/news" component={<div>News</div>} />
                                <Route path="/" component={Home} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
