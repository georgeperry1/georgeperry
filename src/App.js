import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import { AppBody } from './App.styled';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Technologies from './components/Technologies';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      enterCount: 0,
      entered: false,
    };
  };

  handleWaypointEnter = () => {
    this.setState({
      enterCount: this.state.enterCount + 1,
      entered: true,
    });
  };

  render() {
    const { entered, enterCount } = this.state;    

    return (
      <AppBody>
        <NavBar />
        <Landing/>
        <Waypoint
          onEnter={this.handleWaypointEnter}
        />
        <Technologies 
          entered={entered} 
          enterCount={enterCount} 
        />
      </AppBody>
    );
  }
}

export default App;
