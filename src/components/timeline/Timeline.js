import React, { Component } from 'react';
import timeline from '../../assets/Timeline.png';
import './Timeline.css';
import { Link } from 'react-router-dom';

// Timeline component is an interactive image used to navigate to various pages of the site
class Timeline extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <div className="timeline-circles-container">
                <div className="circle-box company-circle">
                    <Link to="/workExperience" >
                        <div className="timeline-circle light-blue-circle">
                            <div>Hockey Referee</div>
                        </div>
                    </Link>
                </div>
                <div className="circle-box company-circle">
                    <Link to="/workExperience" >
                        <div className="timeline-circle blue-circle">
                            <div>Air Canada</div>
                        </div>
                    </Link>
                </div>
                <div className="circle-box company-circle">
                    <Link to="/workExperience" >
                        <div className="timeline-circle medium-blue-circle">
                            <div>IBM</div>
                        </div>
                    </Link>
                </div>
                <div className="circle-box company-circle">
                    <Link to="/workExperience" >
                        <div className="timeline-circle dark-blue-circle">
                            <div>Farrpoint</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="timeline">
                <img width="100%"
                src={timeline}
                />
            </div>
            <div className="timeline-circles-container">
                <div className="circle-box tbog-circle">
                    <Link to="/projects" >
                        <div className="timeline-circle light-blue-circle">
                            <div>Tbog</div>
                        </div>
                    </Link>
                </div>
                <div className="circle-box hockey-circle">
                    <Link to="/interests">
                        <div className="timeline-circle blue-circle">
                            <div>Hockey</div>
                        </div>
                    </Link>
                </div>
                <div className="circle-box skiing-circle">
                    <Link to="/interests">
                        <div className="timeline-circle medium-blue-circle">
                            <div>Skiing</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}
export default Timeline;