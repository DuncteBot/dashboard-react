import React, {Component} from 'react';

export default class GuildCard extends Component {

    render() {
        const {guild} = this.props;

        return (
            <div>
                <div className="col s12 m6 l4 xl3">
                    <div className="card horizontal hoverable">
                        <div className="card-image">
                            <img src={guild.iconUrl + "?size=256"} alt={guild.name}/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h6 className="truncate">{guild.name}</h6>
                                <p>{guild.members > 0 ? `${guild.members} members` : "Bot not in server"}</p>
                            </div>
                            <div className="card-action">
                                <a href={`/settings/${guild.id}`}>Edit settings</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
