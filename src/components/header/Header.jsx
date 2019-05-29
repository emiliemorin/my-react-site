import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

// Header component used to navigate to different pages. It is a child component of each page.
class Header extends Component {
    render () {
        return (
            <div className="header-container">
                <Link to="/"><div className="header-name">Emilie Morin</div></Link>
                <Link to="/workExperience" ><button className="navigation-box" >Work Experience</button></Link>
                <Link to="/skills" ><button className="navigation-box">Skills</button></Link>
                <Link to="/projects" ><button className="navigation-box">Projects</button></Link>
                <Link to="/education" ><button className="navigation-box">Education</button></Link>
                <Link to="/interests" ><button className="navigation-box">Interests</button></Link>
                <Link to="/contact" ><button className="navigation-box">Contact</button></Link>
                <button className="navigation-box">Contact</button>
            </div>
        )
    }
}

export default Header;