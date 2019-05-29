import React, { Component } from 'react';
import Header from '../header/Header';
import './Skills.css';

// Component displays skills
class Skills extends Component {
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
                <div className="page-title">Skills</div>
                <div className="skills-container">
                    <div className="skill-title">Front-End</div>
                    <div className="skills-body">
                        <li>React</li>
                        <li>Redux</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skill-title">High-Level</div>
                    <div className="skills-body">
                        <li>C</li>
                        <li>Python</li>
                        <li>Matlab</li>
                    </div>
                </div>
                <div className="skills-container ">
                    <div className="skill-title">Low-Level</div>
                    <div className="skills-body">
                        <li>Verilog</li>
                        <li>Assembly</li>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skill-title">Data Aanalysis/Graphing</div>
                    <div className="skills-body">
                        <li>Matlab</li>
                        <li>Excel</li>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skill-title">Digital Strategy</div>
                    <div className="skills-body">
                        <li>Google AdWords</li>
                        <li>Adobe Analytics</li>
                    </div>
                </div>
                <div className="skills-container ">
                    <div className="skill-title">Other Skills</div>
                    <div className="skills-body">
                        <li>Microsoft Powerpoint</li>
                        <li>Microsoft Word</li>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Skills;