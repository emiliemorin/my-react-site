import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Interests extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="background-image"></div>
                <div className="page-container">
                    <div className="page-title">Projects</div>
                </div>
            </div>
        )
    }
}
export default Interests;