import React, { Component } from 'react';
import Header from './header/Header';
import headshot from '../assets/Headshot-BW-round.png';
import Timeline from './timeline/Timeline';
import './Home.css';

class Home extends Component {
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
            <div className="home-left-page">
              <div className="page-title">Emilie Morin</div>
              <div className="paragraph-text">As I begin to build my career in technology, I see endless potential accross all industries. 
                I believe that the greatest technological ventures are ones that enable people to be more efficient, 
                and live happier, healthier lives. We must also ensure the same for future generations.
              </div>
              {/* <div className="paragraph-text">The collaboration of technology companies with other industries has never been more pivital. 
                With advances in artificial intelligence, we are learning about diseases and illnesses at an accelerated rate, allowing for more effective treatment plans and higher success rates.
                With developments in IoT and electric vehicles, we are on our way to decreasing the amount of carbon emissions being released into our atmosphere. 
                And with increased data collection, companies are able to better understand the needs of their customers and improve operations efficiency.
              </div> */}
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
            <Timeline />
          </div>
      </div>
    )
  }
}
export default Home;