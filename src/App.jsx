import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SideMenu from './components/SideMenu.jsx';
import Home from './components/HomeComponent.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import Ecommerce from './components/Ecommerce.jsx';

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
                                <Route path="/userProfile" component={Profile} />
                                <Route path="/ecommerce" component={Ecommerce} />
                                <Route path="/news" component={News} />
                                <Route path="/" component={Ecommerce} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

const Profile = () => <div>Profile</div>

const News = () => <div>News</div>
