import React, { useState, useEffect } from 'react';
// import Slider from './Slider';
import InputCals from './InputCals';

const LinkedSliders = () => {
  const [calsPerDay, useCalsPerDay] = useState(0);
  const [week, useWeek] = useState([]);
  useEffect(() => {
    createWeek();
  }, []);
  
  const createWeek = () => {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push({id: i});
    }
    useWeek(week.concat(arr));
  }
  
  return (
    <div>
    {console.log('week :', week)}
      <InputCals
        cals={calsPerDay}
        change={useCalsPerDay}
      />
    </div>
  );
};

export default LinkedSliders;