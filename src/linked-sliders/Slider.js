import React, { useState } from 'react';

const Slider = ({ value }) => {
  const [range, useRange] = useState(0);
  
  return (
    <div>
      <input
        type='text'
        readOnly
        value={
          (() => {
            if (value !== range) {
              useRange(value);
            }
            return range;
          })()
        }
      />
      <input
        type='range'
        defaultValue={value / 2}
        min='0'
        max={value}
        onChange={(e) => {
          if (range !== +e.target.value) {
            useRange(+e.target.value);
          }
        }}
      />
      <input type='checkbox' />
    </div>
  );
};

export default Slider;