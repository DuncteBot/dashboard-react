import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Home from './views/Home';
import Guilds from './views/Guilds';
import Callback from './views/Callback';
import {getSearchObject, login} from './utils/helpers';

class App extends Component {
    state = {
        guilds: [],
        loggedIn: false,
    };

    updateState = (o) => this.setState(o);

    async componentDidMount() {
        const {code, state} = getSearchObject();

        if (code && state) {
            const res = await login(code, state);

            if (res.success) {
                this.setState({loggedIn: true});
            }
        }
    }

    render() {
        return (
            <Router>
                <Route path="/" exact component={() => <Home state={this.state} updateState={this.updateState}/>}/>
                <Route path="/callback" component={() => <Callback state={this.state} updateState={this.updateState}/>}/>
                <Route path="/guilds" exact component={() => <Guilds state={this.state} updateState={this.updateState}/>}/>
            </Router>
        );
    }
}

export default App;
