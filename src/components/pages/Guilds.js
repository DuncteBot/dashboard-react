import React, {Component} from 'react';
import GuildCard from "../GuildCard";
import Loader from "../Loader";
import {Link} from "react-router-dom";

export default class Guilds extends Component {
    state = {
        guilds: [],
    };

    componentDidMount() {
        const guilds = [
            {
                name: "JDA (Java Discord Api)",
                members: -1,
                iconUrl: "https://cdn.discordapp.com/icons/125227483518861312/8be466a3cdafc8591fcec4cdbb0eefc0.webp",
                id: "125227483518861312"
            },
            {
                name: "DuncteBot",
                members: 200,
                iconUrl: "https://cdn.discordapp.com/icons/191245668617158656/e201d914b819cd267feb1f460004f6a2.webp",
                id: "191245668617158656"
            }
        ];


        setTimeout(() => {
            this.setState({guilds})
        }, 5000);
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
