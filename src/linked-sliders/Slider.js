import React, { useState, useEffect } from 'react';

const Slider = ({ value = 600, onChange = (v) => console.log(v)}) => {
  const [range, useRange] = useState(0);
  
  useEffect(() => {useRange(value)}, [value])
  
  const onRangeChange = (e) => {
    useRange(+e.target.value);
    onChange(range);
  }

  return (
    <div>
      <input
        type='text'
        readOnly
        value={range}
      />
      <input
        type='range'
        defaultValue={value / 2}
        min='0'
        max={value}
        onChange={onRangeChange}
      />
      <input type='checkbox' />
    </div>
  );
};

export default Slider;