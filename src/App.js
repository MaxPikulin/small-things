import React, { useState } from 'react';
import './App.css';
import LinkedSliders from './linked-sliders/LinkedSliders';
import Slider from './linked-sliders/Slider';

const App = () => {
  const numSliders = 7;
  
  const handleSliderChange = (value) => {
    console.log('value :', value);
  }
  
  return (
    <div className="App">
      {/* <LinkedSliders /> */}
      <Slider 
      value={1000}  
      onChange={handleSliderChange}
      step={numSliders}
      />
    </div>
  );
}

export default App;
