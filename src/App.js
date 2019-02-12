import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import { AppBody } from './App.styled';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Technologies from './components/Technologies';

class App extends Component {
  state = {
    entered: false,
  };

  handleWaypointEnter = () => {
    this.setState({ entered: true });
  };

  render() {
    const { entered } = this.state;
    return (
      <AppBody>
        <NavBar/>
        <Landing/>
        <Waypoint
          onEnter={this.handleWaypointEnter}
        />
        <Technologies entered={entered} />
      </AppBody>
    );
  }
}

export default App;
