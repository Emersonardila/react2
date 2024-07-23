import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount} disabled={count < 1}>-</button>
    </div>
  );
};

export default Counter;