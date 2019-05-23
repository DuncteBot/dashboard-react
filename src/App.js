import React, {Component} from 'react';
import './App.css';
import 'materialize-css/sass/materialize.scss';
import 'materialize-css';
import Loader from "./components/loader";

class App extends Component {
    render() {
        return (
            <div>
                <Loader/>
            </div>
        );
    }
}

export default App;
