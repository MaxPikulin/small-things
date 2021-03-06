import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import InputCals from './InputCals';

//кого я обманюю...

const LinkedSliders = () => {
  const sliderAmount = 7;
  let sliders = [];

  const [calsPerDay, setCalsPerDay] = useState(0);
  const [week, setWeek] = useState([]);
  const [total, setTotal] = useState(0);
  const [perDay, setPerDay] = useState(0);

  const changeTotal = (perDay) => {
    setPerDay(perDay);
    setTotal(perDay * sliderAmount);
  }

  useEffect(() => {
    console.log('sliders :', sliders);
    sliders = createWeek();
  }, []);

  const createWeek = () => {
    let arr = [];
    let sliders = [];
    for (let i = 0; i < sliderAmount; i++) {
      arr.push({ id: i, value: perDay });
      sliders.push(
        <Slider key={i} value={perDay} />
      );
    }
    setWeek(week.concat(arr));
    // console.log('sliders :', sliders);
    return sliders;
  }

  return (
    <div>
      {/* {console.log('week :', week)} */}
      <InputCals
        cals={calsPerDay}
        changeTotal={changeTotal}
      />
      {console.log(sliders)}
      {sliders.map(slider => {
        console.log(slider);
        return <Slider key={slider.id} value={slider.value} />
      })}
    </div>
  );
};

export default LinkedSliders;