import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Home from "./components/pages/Home";
import Guilds from "./components/pages/Guilds";

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/guilds" exact component={Guilds}/>
            </Router>
        );
    }
}

export default App;
