import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 center">
                            {this.props.state.loggedIn ? <h1>Hi here, <Link to="/guilds">Click me</Link></h1> :
                                <h1><a href={this.props.state.url}>Log in</a></h1>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
