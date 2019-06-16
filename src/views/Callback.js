import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import {getSearchObject, login} from '../utils/helpers';

export default class Callback extends Component {

    state = {
        canRedirect: false
    };

    async componentDidMount() {
        const {code, state} = getSearchObject();
        const res = await login(code, state);

        if (res.success) {
            this.props.updateState({loggedIn: true});
            this.setState({canRedirect: true});
        }
    }

    render() {


        return (
            <div>
                {this.state.canRedirect ? <Redirect to="/guilds"/> : <p>Logging in....</p>}
            </div>
        );
    }
}
