import React, { Component } from "react";
import axios from "axios";
import Logo from "./images/communicateLogo.png";
import homeIcon from "./images/homeIcon.png";
import customerIcon from "./images/customerIcon.png";
import restaurantIcon from "./images/restaurantIcon.png";
import DBPlayground from "./components/DBPlayground";

import './App.css';

import {
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';

class App extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            username: null
        }

        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    componentDidMount() {
        this.getUser()
    }

    updateUser(userObject) {
        this.setState(userObject)
    }

    getUser() {
        axios.get('/find').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    username: null
                })
            }
        })
    }

    render() {
        return (
            <div>

                {/* {this.state.loggedIn && */}
                {/* <p className="white-text">Join the party, {this.state.username}!</p> */}
                {/* } */}

                <div className="App">
                    <header className="valign-wrapper">
                        <div className="row">
                            <div className="col l8 m12 s12">
                                <img src={Logo} className="responsive-img App-logo" alt="logo" />
                            </div>
                            <div className="col l4 m12 s12">
                                <Link to="/"><img className="responsive-img Icon" src={homeIcon} alt="Home Icon" /></Link>
                                <Link to="/Customer"><img className="responsive-img Icon" src={customerIcon} alt="Customer Icon" /></Link>
                                <Link to="/Restaurant"><img className="responsive-img Icon" src={restaurantIcon} alt="Restaurant Icon" /></Link>
                            </div>
                        </div>
                    </header>


                    {/* <div className="menu">
                        <Link to="/"></Link>
                        <Link to="/messages"></Link>
                        <Link to="/about"></Link>
                    </div>
                    <div className="App-intro">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/messages" component={Messages} />
                            <Route path="/about" component={About} />
                            <Redirect to="/" />
                        </Switch>
                    </div> */}
                </div>

            </div>
        );
    }
}

export default App;
