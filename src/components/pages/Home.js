import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 center">
                        <h1>Hi here, <Link to="/guilds">Click me</Link></h1>
                    </div>
                </div>
            </div>
        );
    }

}
