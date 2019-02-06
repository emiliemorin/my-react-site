import React, { Component } from 'react';
import Header from '../header/Header';
import './Projects.css'
import video from '../../assets/IMG_6531.mp4';
import Calculator from '../calculator/Calculator';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPlay: true
        }
        this.playPauseVideo= this.playPauseVideo.bind(this);
    }

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
                <h2 className="italic">UBC Concrete Toboggan Design Team</h2>
                <li>Work with Electrical, Mechanical, and Civil engineering students to design an innovative toboggan design</li>
                <li>Integrate electronic components such as accelerometers, and concrete strain meters with Arduino</li>
                <div className="bottom-margin"></div>
                
                {/* <Calculator /> */}

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
                

                <h2 className="italic">Page Rank</h2>
                <li>Programmed MATLAB commands in C to manipulate matrices of web pages to simulate the Google Page Rank Algorithm</li>
                <div className="bottom-margin"></div>

                <h2 className="italic">Simple RISC Machine</h2>
                <li>Collaborated with a partner to build an RISC Machine in weekly stages, in Verilog</li>
                <li>Developed valuable debugging skills through writing thorough test benches in ModelSim</li>
            </div>
        </div>
        )
    }
}
export default Projects;