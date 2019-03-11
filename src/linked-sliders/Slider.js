import React, { useState } from 'react';

const Slider = ({ value }) => {
  const [range, useRange] = useState(0);
  // useRange(value);
  return (
    <div>
      <input
        type='text'
        readOnly
        value={value}
      />
      <input
        type='range'
        defaultValue={value / 2}
        min='0'
        max={value}
        onChange={(e) => {
          useRange(e.target.value);
        }}
      />
      <input type='checkbox' />
    </div>
  );
};

export default Slider;