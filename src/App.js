import React, { Component } from 'react';
import './App.css';
import LinkedSliders from './linked-sliders/LinkedSliders';
import Slider from './linked-sliders/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LinkedSliders /> */}
        <Slider />
      </div>
    );
  }
}

export default App;
