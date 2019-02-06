import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './Home';
import WorkExperience from './workExperience/WorkExperience';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route name="home" exact path="/" render={(props) => (
            <Home {...props} />
          )}
          />
          <Route name="work-experience" exact path="/workExperience" render={(props) => (
            <WorkExperience {...props} />
          )}
          />
        </div>
      </Router>
    )
  }
}
export default App;