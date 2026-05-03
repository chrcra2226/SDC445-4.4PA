import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className = 'App'>
      <Counter />
      <br />
      <h1>Text Field Component</h1>
      <h2>Message: {inputValue}</h2>
      <InputField value={inputValue} onChange={handleChange} />
      <br />
      <h1>Todo List Component</h1>
      <TodoList />
    </div>
  );
}

export default App;
