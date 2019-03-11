import React from 'react';

const InputCals = ({cals, change}) => {
  return (
    <>
      <input
        type='text'
        value={cals || ''}
        onChange={(e) => change(+e.target.value)}
      />
      <button onClick={change}>Set cals</button>
    </>
  );
}

export default InputCals;