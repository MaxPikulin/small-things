import React from 'react';

const InputCals = ({cals, changeTotal}) => {
  return (
    <>
      <input
        type='text'
        // value={cals || ''}
        onChange={(e) => changeTotal(+e.target.value)}
      />
      {/* <button onClick={change}>Set cals</button> */}
    </>
  );
}

export default InputCals;