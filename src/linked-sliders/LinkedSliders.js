import React, { useState, useEffect } from 'react';
// import Slider from './Slider';
import InputCals from './InputCals';

const LinkedSliders = () => {
  const sliderAmount = 7;
  
  const [calsPerDay, useCalsPerDay] = useState(0);
  const [week, useWeek] = useState([]);
  const [total, useTotal] = useState(0);
  
  const changeTotal = (perDay) => {
    useTotal(perDay * sliderAmount);
  }
  
  useEffect(() => {
    createWeek();
  }, []);
  
  const createWeek = () => {
    let arr = [];
    for (let i = 0; i < sliderAmount; i++) {
      arr.push({id: i});
    }
    useWeek(week.concat(arr));
  }
  
  return (
    <div>
    {console.log('week :', week)}
      <InputCals
        cals={calsPerDay}
        changeTotal={changeTotal}
      />
    </div>
  );
};

export default LinkedSliders;