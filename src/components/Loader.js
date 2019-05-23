import React, { Component } from 'react';

export default class Loader extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="center">
                            <h1>Loading...</h1>
                            <div className="progress">
                                <div className="indeterminate"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
