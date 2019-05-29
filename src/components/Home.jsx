import React, { Component } from 'react';
import Header from './header/Header';
import headshot from '../assets/Headshot-BW-round.png';
import Timeline from './timeline/Timeline';
import './Home.css';

// This component is the home component and the first page the user sees on the website
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <Header />
        <div className="background-image">
        </div>
          <div className="page-container">
            <div className="home-left-page">
              <div className="page-title">Emilie Morin</div>
              <div className="paragraph-text">
                Studying Electrical Engineering at the University of British Columbia, I am currently on exchange at the University of Glasgow.
              </div>
              <div className="paragraph-text">
                I enjoy using innovative technology to solve challenging problems and improve customer experience. Through internships, I have gained work experience in Digital Strategy and Full-Stack Development.
              </div>
              <div className="paragraph-text">
                At UBC, I am an executive of the Concrete Toboggan Team, primarily contributing to the electronics, technical display, and spirit sub teams. In addition, I am a member of an intramural hockey team.
              </div>
              <h2>
                Click on the buttons below to find out more!
              </h2>
            </div>
            <div className="bottom-margin"></div>
            <div className="home-right-page">
              <div className="headshot-image-border">
                <img className="headshot" src={headshot} />
              </div>
            </div>
            {/* The user can navigate the website using the timeline component */}
            <Timeline />
          </div>
      </div>
    )
  }
}
export default Home;