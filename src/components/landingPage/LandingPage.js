import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-page-image">
        {/* <img src={require('../../assets/MountainsBW.jpg')} width="100%" /> */}
        <Link to="/aboutMe"><div className="landing-page-content">
            <div className="left-oval-line"></div>
            <div className="middle-oval">
                <div className="small-middle-oval">
                    <h1 className="landing-page-text">Emilie Morin</h1>
                    <h2 className="landing-page-small-text">Developer - Engineer - Student</h2>
                </div>
            </div>
            <div className="right-oval-line"></div>
        </div></Link>
      </div>
    )
  }
}
export default LandingPage;