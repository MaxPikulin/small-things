import React, { useState } from 'react';
import Slider from './Slider';
import InputCals from './InputCals';

const LinkedSliders = () => {
  const [calsPerDay, useCalsPerDay] = useState(0);
  
  const createWeek = () => {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(
        <Slider key={i} value={calsPerDay} />
      );
    }
    return week;
  }
  
  return (
    <div>
      <InputCals cals={calsPerDay} change={useCalsPerDay} />
      {createWeek()}
    </div>
  );
};

export default LinkedSliders;