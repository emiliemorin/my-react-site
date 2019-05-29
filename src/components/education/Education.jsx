import React, { Component } from 'react';
import Header from '../header/Header';
import './Education.css';

// Component displays education history
class Education extends Component {
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
                <div className="page-title">Education</div>
                <div className="education-box">
                    <h2>University of Glasgow (Exchange)</h2>
                    <div>Electrical Engineering</div>
                    <div>Jan - May, 2019</div>
                    <div className="bottom-margin"></div>
                </div>
                <div className="education-box">
                    <h2>University of British Columbia</h2>
                    <div>Electrical Engineering (Co-op)</div>
                    <div>Sept, 2016 - Apr, 2021</div>
                    <div className="bottom-margin"></div>
                </div>
                <div className="education-box">
                    <h2>St. Clement's School</h2>
                    <div>Toronto, ON</div>
                    <div>Sept, 2010 - Jun, 2016</div>
                </div>
            </div>
        </div>
        )
    }
}
export default Education;