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
              <div className="paragraph-text">As I begin to build my career in technology, I see endless potential accross all industries. 
                I believe that the greatest technological ventures are ones that enable people to be more efficient, 
                and live happier, healthier lives. We must also ensure the same for future generations.
              </div>
              <div className="paragraph-text">
                I am currently in my third year of Electrical Engineering, on Exchange at the University of Glasgow, with work experience in Full Stack Development and Digital Strategy. 
                An avid problem solver, I am constantly looking for challenges to further my growth and expand my perspectives on the world around me.
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