import React, { Component } from 'react';
import Header from '../header/Header';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <Header />
            <div className="background-image">
            </div>
            <div className="page-container">
                <div className="page-title">Contact</div>
                <div><h2>Email</h2></div>
                <div><a href="mailto:eacmorin@gmail.com">eacmorin@gmail.com</a></div>
                <div className="bottom-margin"></div>
                <h2>LinkedIn</h2>
                <div><a href="https://www.linkedin.com/in/emilie-morin-55a06812b">Emilie Morin</a></div>
            </div>
        </div>
        )
    }
}
export default Contact;