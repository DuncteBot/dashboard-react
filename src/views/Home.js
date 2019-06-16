import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {

    render() {
        const {loggedIn, url} = this.props.state;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 center">
                            {loggedIn ? <h1>Hi here, <Link to="/guilds">Click me</Link></h1> :
                                <div>
                                    {url ? <h1><a href={this.props.state.url}>Log in</a></h1> : 'Loading'}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
