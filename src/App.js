import React, { Component } from 'react';

import { AppBody } from './App.styled';
import NavBar from './components/NavBar';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <AppBody>
        <NavBar/>
        <Landing/>
      </AppBody>
    );
  }
}

export default App;
