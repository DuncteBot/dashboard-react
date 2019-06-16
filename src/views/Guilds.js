import React, {Component} from 'react';
import GuildCard from '../components/GuildCard';
import Loader from '../components/Loader';
import {Link} from 'react-router-dom';
import {loadGuilds} from '../utils/helpers';

export default class Guilds extends Component {
    constructor(props) {
        super(props);

        this.state = props.state;
    }

    async componentDidMount() {
        if (!this.props.state.guilds.length) {
            const {guilds, status} = loadGuilds();

            if (!status) {
                this.props.updateState({guilds: []});
            } else {
                this.props.updateState({guilds});
            }
        }
    }


    render() {
        const {guilds} = this.state;

        return (
            <div>
                <p><Link to="/">Go back</Link></p>
                {guilds.length ? guilds.map((guild) => <GuildCard guild={guild} key={guild.id}/>) : <Loader/>}
            </div>
        );
    }

}
