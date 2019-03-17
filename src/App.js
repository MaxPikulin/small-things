import React, { useState, useEffect } from 'react';
import './App.css';
import LinkedSliders from './linked-sliders/LinkedSliders';
import Slider from './linked-sliders/Slider';

const App = () => {
  const numSliders = 7;
  const slidersValue = 1000;
  const [sliders, setSliders] = useState({0:{id:0, value: ''}});
  useEffect(() => {
    let sl = {};
    for (let i = 0; i < numSliders; i++) {
      sl[i] = { id: i, value: slidersValue };
    }
    setSliders(sl);
  }, []);
  
  useEffect(() => {console.log('value :', sliders[3] && sliders[3].value)});

  const handleSliderChange = (id, value) => {
    setSliders({...sliders, ...{[id]: {id, value}}});
  }

  return (
    <div className="App">
      {/* <LinkedSliders /> */}
      <Slider
        value={1000}
        onChange={handleSliderChange}
        step={numSliders}
        key={3}
        id={3}
      />
    </div>
  );
}

export default App;
