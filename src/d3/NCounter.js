import React, { useState } from "react";

const NCounter = () => {
  const [number, setNumber] = useState(1);

  const increaseNumber = () => {
    setNumber(number + 1);
    
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
    
  };

  return (
    <div>
      <h1>현재카운터 값은{number}입니다</h1>
      <button onClick={increaseNumber}>+1</button>&nbsp;
      <button onClick={decreaseNumber}>-1</button>
    </div>
  );
};

export default NCounter;