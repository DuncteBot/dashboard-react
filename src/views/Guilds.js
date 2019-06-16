import React, {Component} from 'react';
import GuildCard from '../components/GuildCard';
import Loader from '../components/Loader';
import {Link, Redirect} from 'react-router-dom';
import {loadGuilds as apiLoadGuilds} from '../utils/helpers';

export default class Guilds extends Component {

    loadGuilds = async () => {
        if (!this.props.state.guilds.length) {
            const {guilds, success, message} = await apiLoadGuilds();

            if (!success) {
                if (message === 'SESSION_INVALID') {
                    document.cookie.split(';').forEach(function(c) { document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/'); });
                }

                this.props.updateState({guilds: [], guildsLoaded: true});
            } else {
                this.props.updateState({guilds, guildsLoaded: true});
            }
        }
    };

    componentDidMount() {
        const {guilds, guildsLoaded} = this.props.state;

        if (!guilds.length && !guildsLoaded) {
            this.loadGuilds();
        }
    }

    render() {
        const {guilds, guildsLoaded, loggedIn} = this.props.state;

        return (
            <div>
                {loggedIn ? <div>
                    <p><Link to="/">Go back</Link></p>
                    {guilds.length > 0 ?
                        guilds.map((guild) => <GuildCard guild={guild} key={guild.id}/>) :
                        <div>
                            {guildsLoaded ? 'no guilds found' : <Loader/>}
                        </div>
                    }
                </div> :
                    <Redirect to="/"/>
                }
            </div>
        );
    }

}
