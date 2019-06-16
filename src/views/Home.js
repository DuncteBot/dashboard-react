import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
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
        console.log(this.props.state.guilds);
        console.log(getSearchObject());

        if (this.state.url === '') {
            this.updateUrl();
        }

        return (
            <div>
                {this.props.state.loggedIn ? <Redirect to="/guilds"/>  :
                    <div className="container">
                        <div className="row">
                            <div className="col s12 center">
                                <h1>Hi here, <Link to="/guilds">Click me</Link></h1>
                                <p><a href={this.state.url}>Log in</a></p>
                            </div>
                        </div>
                    </div>}
            </div>
        );
    }

}
