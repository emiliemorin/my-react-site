import React, { Component } from 'react';
import Header from '../header/Header';

// Component displays work experience
class WorkExperience extends Component {
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
                <div className="page-title">Work Experience</div>
                <h2 className="italic">Associate Consultant,</h2> <h2>Farrpoint</h2>
                <div className="date">Jun - Aug, 2019</div>
                <div className="bottom-margin"></div>
                
                <h2 className="italic">Full-Stack Developer (Co-op),</h2> <h2>IBM Canada - Watson IoT</h2>
                <div className="date">May - Aug, 2018</div>
                <li>Developed mobile web applications and web portals in React, using Redux and
                    Graphql, for various client projects</li>
                <li>Implemented Redux to manage API calls and developed error handling logic for API
                    responses and UI validation</li>
                <li>Utilized React libraries to create graphs and interactive visualizations, and incorporate
                    internationalization</li>
                <div className="bottom-margin"></div>

                <h2 className="italic">Digital Strategy Intern,</h2> <h2>Air Canada</h2>
                <div className="date">Jun - Aug, 2017</div>
                <li>Collaborated with web development, mobile app, marketing teams, and various agencies to improve the digital marketing platform</li>
                <li>Utilized Adobe Analytics, AMO, and Google AdWords to conduct analysis of
                    marketing campaign success</li>
                <li>Presented research and analysis at various technical levels to colleagues,
                    managers and senior leadership</li>
                <div className="bottom-margin"></div>

                <h2 className="italic">Camp Counsellor,</h2> <h2>Upper Canada College Summer Camps</h2>
                <div className="date">Jun - Aug, 2016, Jun - Aug, 2015</div>
                <li>Supervised children between the ages of eight and fourteen years old</li>
                <li>Collaborated with colleagues to organize activities for the children</li>
                <li>Encouraged individual development of sports skills</li>
                <div className="bottom-margin"></div>

                <h2 className="italic">Ice Hockey Referee,</h2> <h2>Toronto Leaside Girls Hockey Association</h2>
                <div className="date">Sept, 2013 - Jun, 2016</div>
                <li>Oversaw organized play with authority, bi-weekly</li>
                <li>Ensured safety and sportsmanship in players and coaches</li>
                <li>Quickly reacted to the situation on the ice</li>
                <div className="bottom-margin"></div>
            </div>
        </div>
        )
    }
}
export default WorkExperience;