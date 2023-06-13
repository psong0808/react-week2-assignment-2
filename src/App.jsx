import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function onClickAdd() {
    setTodo((todoPrev) => [...todoPrev, inputValue]);
    setInputValue(() => '');
  }

  function onClickDone(i) {
    setTodo(todo.filter((_, index) => index !== i));
  }

  return (
    <Page
      inputValue={inputValue}
      onClickAdd={onClickAdd}
      handleInputChange={handleInputChange}
      todo={todo}
      onClickDone={onClickDone}
    />
  );
}
