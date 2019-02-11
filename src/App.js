import React, { Component } from 'react';

import { AppBody } from './App.styled';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Technologies from './components/Technologies';

class App extends Component {
  render() {
    return (
      <AppBody>
        <NavBar/>
        <Landing/>
        <Technologies/>
      </AppBody>
    );
  }
}

export default App;
