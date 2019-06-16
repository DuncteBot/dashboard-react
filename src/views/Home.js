import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getOauthUrl, getSearchObject} from '../utils/helpers';

export default class Home extends Component {

    state = {
        url: '',
    };

    async updateUrl() {
        const {url} = await getOauthUrl();

        this.setState({url});
    }

    render() {
        if (this.state.url === '' && !this.props.state.loggedIn) {
            this.updateUrl();
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 center">
                            {this.props.state.loggedIn ? <h1>Hi here, <Link to="/guilds">Click me</Link></h1> :
                                <h1><a href={this.state.url}>Log in</a></h1>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
