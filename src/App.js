import VuvuFooter from './components/VuvuFooter';
import VuvuNum from './components/Vuvunum';
import Features from './components/Features';
import Welcome from './components/Welcome';
import React, { Component } from 'react';
import Slides from './components/Slides';
import Bg from './components/Bg';

class App extends Component {
  render() {
    return (
      <div className="App">
       
      <Slides/>
      <Welcome/>
      <Bg/>
      <Features/>
      <VuvuNum/>
      <VuvuFooter/>
     
      
      </div>
    );
  }
}

export default App;
