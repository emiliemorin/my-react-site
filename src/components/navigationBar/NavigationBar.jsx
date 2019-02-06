import React, { Component } from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    constructor (props) {
        super(props);

    }
    
    render () {
        return (
            <div className="navigation-bar-container">
                <Link to="/aboutMe" ><button className="navigation-box" >About Me</button></Link>
                <Link to="/workExperience" ><button className="navigation-box" >Work Experience</button></Link>
                <Link to="/skills" ><button className="navigation-box">Skills</button></Link>
                <button className="navigation-box">Projects</button>
                <button className="navigation-box">Design Teams</button>
                <button className="navigation-box">Education</button>
                <button className="navigation-box">Sports</button>
            </div>
        )
    }
}

export default NavigationBar;