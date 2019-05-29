import React, { Component } from 'react';
import Header from '../header/Header';
import ski from '../../assets/ski.jpg';
import golf from '../../assets/golf.jpg';
import hike from '../../assets/hike.jpg';
import hockey from '../../assets/hockey.jpg';
import './Interests.css';

// Component displays interests
class Interests extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="background-image"></div>
                <div className="page-container">
                    <div className="page-title">Interests</div>
                    <div className="interest-container">
                        <h2>Hockey</h2>
                        <div className="bottom-margin"></div>
                        <div >
                            <img className="interest-photo" src={hockey} />
                        </div>
                    </div>
                    <div className="interest-container">
                        <h2>Skiing</h2>
                        <div className="bottom-margin"></div>
                        <div >
                            <img className="interest-photo" src={ski} />
                        </div>
                    </div>
                    <div className="interest-container">
                        <h2>Golf</h2>
                        <div className="bottom-margin"></div>
                        <div >
                            <img className="interest-photo" src={golf} />
                        </div>
                    </div>
                    <div className="interest-container">
                        <h2>Hiking</h2>
                        <div className="bottom-margin"></div>
                        <div >
                            <img className="interest-photo" src={hike} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Interests;