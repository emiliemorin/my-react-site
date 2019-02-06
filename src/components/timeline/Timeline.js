import React, { Component } from 'react';
import timeline from '../../assets/Timeline.png';
import './Timeline.css';
import { Link } from 'react-router-dom';

class Timeline extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <div className="timeline-circles-container">
                <div className="circle-box">
                    <Link to="/workExperience" >
                        <div className="company-circle referee-circle">
                            <div>Hockey Referee</div>
                        </div>
                    </Link>
                </div>
                <div className="circle-box">
                    <Link to="/workExperience" >
                        <div className="company-circle air-canada-circle">
                            <div>Air Canada</div>
                        </div>
                    </Link>
                </div>
                <div className="circle-box">
                    <Link to="/workExperience" >
                        <div className="company-circle ibm-circle">
                            <div>IBM</div>
                        </div>
                    </Link>
                </div>
                <div className="circle-box">
                    <div className="company-circle new-circle">
                        <div>?</div>
                    </div>
                </div>
            </div>
            <div>
                <img width="100%"
                src={timeline}
                />
            </div>
        </div>
        )
    }
}
export default Timeline;