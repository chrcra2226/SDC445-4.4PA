import React, { useState } from 'react';

const Counter = ({ label, onClick }) => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + 1);
    };
    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    return (
        <div>
          <h1>Counter Component</h1>
          <h2>Counter: {count}</h2>
          <button onClick={handleIncrement}>Increase</button>
          <button onClick={handleDecrement}>Decrease</button>
        </div>
      );
}

export default Counter;