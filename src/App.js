import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import { AppBody } from './App.styled';
import Landing from './components/Landing';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Writing from './components/Writing';
import FindMe from  './components/FindMe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterTechCount: 0,
      enteredTech: false,
      enterWritingCount: 0,
      enteredWriting: false,
    };
  };

  // componentDidMount() {
  //   hotjar.initialize(hjid, hjsv);
  // };

  handleTechnologyWaypointEnter = () => {
    this.setState({
      enterTechCount: this.state.enterTechCount + 1,
      enteredTech: true,
    });
  };

  handleWritingWaypointEnter = () => {
    this.setState({
      enterWritingCount: this.state.enterWritingCount + 1,
      enteredWriting: true,
    });
  };

  render() {
    const { 
      enteredTech, 
      enterTechCount,
      enteredWriting,
      enterWritingCount, 
    } = this.state;    

    return (
      <AppBody>
        <Landing />
        <Waypoint
          onEnter={this.handleTechnologyWaypointEnter}
        />
        <Technologies 
          entered={enteredTech} 
          enterCount={enterTechCount} 
        />
        <Experience />
        <Projects />
        <Waypoint
          onEnter={this.handleWritingWaypointEnter}
        />
        <Writing 
          entered={enteredWriting}
          enterCount={enterWritingCount}
        />
        <FindMe />
      </AppBody>
    );
  }
}

export default App;
