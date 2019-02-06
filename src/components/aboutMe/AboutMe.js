import React, { Component } from 'react';
import Header from '../header/Header';
import headshot from '../../assets/Headshot-BW-round.png';
import Timeline from '../timeline/Timeline';
import './AboutMe.css';

class AboutMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <Header />
        <div className="background-image">
            {/* <img src={require('../assets/WinterMountains.jpg')} width="100%"/> */}
        </div>
          <div className="page-container">
              <div className="page-title">About Me</div>
          </div>
      </div>
    )
  }
}
export default AboutMe;