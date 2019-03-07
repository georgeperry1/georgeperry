

import React, { Component } from 'react';
import Typing, { Backspace, Reset, Delay } from 'react-typing-animation';

import { Speciality } from './LandingSpecialities.styled';


const specialties = [
  'JavaScript',
  'React',
  'APIs',
  'Redux',
  'AWS',
  'Alexa & NLP',
  'Node',
  'HTML',
  'CSS',
  'Circle CI',
  'Git',
  'Animation',
  'SQL',
  'Express',
];

class LandingSpecialities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 8500,
    };
  }

  componentDidMount() {
    if (window.screen.width < 1200) {
      this.setState({ delay: 0 });
    }
  }

  render() {
    return (
       <Typing loop>
       <Delay ms={this.state.delay}/>
        <Speciality>
          {specialties[0]}
          <Backspace count={10} delay={1100} />
          {specialties[1]}
          <Backspace count={5} delay={1100}/>
          {specialties[2]}
          <Backspace count={4} delay={1100}/>
          {specialties[3]}
          <Backspace count={5} delay={1100}/>
          {specialties[4]}
          <Backspace count={3} delay={1100}/>
          {specialties[5]}
          <Backspace count={11} delay={1100}/>
          {specialties[6]}
          <Backspace count={4} delay={1100}/>
          {specialties[7]}
          <Backspace count={4} delay={1100}/>
          {specialties[8]}
          <Backspace count={3} delay={1100}/>
          {specialties[9]}
          <Backspace count={9} delay={1100}/>
          {specialties[10]}
          <Backspace count={3} delay={1100}/>
          {specialties[11]}
          <Backspace count={9} delay={1100}/>
          {specialties[12]}
          <Backspace count={3} delay={1100}/>
          {specialties[13]}
          <Backspace count={8} delay={1100}/>
          <Reset/>
        </Speciality>
      </Typing>
    );
  }
}

export default LandingSpecialities;
