import React, { Component } from 'react';
import Header from '../header/Header';
import './Projects.css'
import video from '../../assets/IMG_6531.mp4';
import lumohacks from '../../assets/lumohacks-2018.jpg';
import toboggan from '../../assets/concrete-toboggan.jpg';

// Component displays projects through photos, videos, and embeded links
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPlay: true
        }
        this.playPauseVideo= this.playPauseVideo.bind(this);
    }

    // function to play and pause video
    playPauseVideo() {
        if (this.state.showPlay) {
            this.refs.video.play();
            this.setState({
                showPlay: false
            })
        }
        else {
            this.refs.video.pause();
            this.setState({
                showPlay: true
            })
        }
    }

    render() {
        return (
        <div>
            <Header />
            <div className="background-image">
            </div>
            <div className="page-container">
                <div className="page-title">Projects</div>

                <h2 className="italic">UBC Concrete Toboggan Design Team Executive</h2>
                <li>Work with Electrical, Mechanical, and Civil engineering students to design an innovative toboggan design</li>
                <li>Organize and lead team meetings and build days</li>
                <li>Integrate electronic components such as accelerometers, and concrete strain meters with Arduino</li>
                <div className="bottom-margin"></div>

                <div className="embeded-link">
                    <img className="photo" src={toboggan} />
                </div>
                <div className="bottom-margin"></div>

                <h2 className="italic">Motion Controlled Car</h2>
                <li>Collaborated with a team of students to design and develop transmitter and receiver circuits to send instructions to a car</li>
                <li>Built a glove that utilized an accelerometer to control the car</li>
                <div className="bottom-margin"></div>
                
                <div className="video-container">
                    <video ref="video" className="video" type="video/mp4" src={video} onClick={this.playPauseVideo.bind(this)}></video>
                    <div>
                        {this.state.showPlay ? 
                            <button className="play-pause" onClick={this.playPauseVideo.bind(this)}>PLAY</button>
                        :
                        <button className="play-pause" onClick={this.playPauseVideo.bind(this)}>PAUSE</button>}
                    </div>
                </div>
                <div className="bottom-margin"></div>

                <h2 className="italic">IBM North America Intern Hackathon 2018</h2>
                <li>Collaborated with team to develop a AR application for an office desk reservation system</li>
                <li>Developed use case and business model, and presented the product to executive judges</li>
                <li>Won Bring Your Own Technology category</li>
                <div className="bottom-margin"></div>

                <div className="embeded-link"><iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6423653836493189120" height="530" width="504" frameborder="0" allowfullscreen=""></iframe></div>
                <div className="bottom-margin"></div>

                <h2 className="italic">Lumohacks 2018</h2>
                <li>Led team in the development of a web app aimed to help people be proactive about their mental health</li>
                <li>Produced storyboards, architecture outlines, and developed the application in React.js</li>
                <li>Placed in top 15 teams</li>
                <div className="bottom-margin"></div>

                <div className="embeded-link">
                    <img className="photo" src={lumohacks} />
                </div>
                <div className="bottom-margin"></div>

                <h2 className="italic">AI Agent Comparison</h2>
                <li>Implemented Q-Learning and A-star maze solving algorithms in Python</li>
                <li>Optimized the Q-learning function variables to improve results</li>
                <li>Tested the algorithms and compared them using charts and graphs</li>
                <div className="bottom-margin"></div>

                {/* <h2 className="italic">Page Rank</h2>
                <li>Programmed MATLAB commands in C to manipulate matrices of web pages to simulate the Google Page Rank Algorithm</li>
                <div className="bottom-margin"></div> */}

                {/* <h2 className="italic">Simple RISC Machine</h2>
                <li>Collaborated with a partner to build an RISC Machine in weekly stages, in Verilog</li>
                <li>Developed valuable debugging skills through writing thorough test benches in ModelSim</li> */}
            </div>
        </div>
        )
    }
}
export default Projects;