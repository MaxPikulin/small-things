import React, { useState, useEffect } from 'react';

const Slider = ({ value, onChange, step }) => {
  const [range, setRange] = useState(0);
  
  useEffect(() => {setRange(value)}, [value])
  
  const onRangeChange = (e) => {
    const value = +e.target.value;
    setRange(value);
    onChange(value);
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
        defaultValue={value}
        min='0'
        max={value}
        onChange={onRangeChange}
      />
      <input type='checkbox' />
    </div>
  );
};

export default Slider;