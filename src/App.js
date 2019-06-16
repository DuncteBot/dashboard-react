import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Home from './views/Home';
import Guilds from './views/Guilds';
import Callback from './views/Callback';
import {getOauthUrl, getSearchObject, login} from './utils/helpers';

class App extends Component {
    state = {
        guilds: [],
        guildsLoaded: false,
        loggedIn: false,
        url: '',
    };

    updateState = (o) => this.setState(o);

    async updateUrl() {
        const {url} = await getOauthUrl();

        this.setState({url});
    }

    async componentDidMount() {
        const {code, state} = getSearchObject();

        if (code && state) {
            const res = await login(code, state);

            this.setState({loggedIn: res.success});
        } else if (this.state.url === '' && !this.state.loggedIn) {
            this.updateUrl();
        }
    }

    render() {
        return (
            <Router>
                <Route path="/" exact component={() => <Home state={this.state} updateState={this.updateState}/>}/>
                <Route path="/callback"
                       component={() => <Callback state={this.state} updateState={this.updateState}/>}/>
                <Route path="/guilds" exact
                       component={() => <Guilds state={this.state} updateState={this.updateState}/>}/>
            </Router>
        );
    }
}

export default App;
