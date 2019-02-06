import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from '../components/Home';
import WorkExperience from '../components/workExperience/WorkExperience';
import Skills from '../components/skills/Skills';
import LandingPage from '../components/landingPage/LandingPage';
import Education from '../components/education/Education';
import Projects from '../components/projects/Projects';
import AboutMe from '../components/aboutMe/AboutMe';

class AppRouter extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Router>
                <Switch>
                    <div>
                    <Route exact path="/" render={() =>
                        <Home />
                    }/>
                    <Route exact path="/aboutMe" render={() => 
                        <AboutMe />
                    }/>
                    <Route exact path="/workExperience" render={() => 
                        <WorkExperience />
                    }/>
                    <Route exact path="/skills" render={() => 
                        <Skills />
                    }/>
                    <Route exact path="/education" render={() => 
                        <Education />
                    }/>
                    <Route exact path="/projects" render={() => 
                        <Projects />
                    }/>
                    </div>
                </Switch>
            </Router>
        )
    }
    
}
export default AppRouter;