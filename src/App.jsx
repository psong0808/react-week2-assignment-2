import { useState } from 'react';
import Todos from './Todos';

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
    <>
      <h1>To-do</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} style={{ marginRight: '10px' }} />
      <button type="button" onClick={onClickAdd}>추가</button>
      <Todos todoList={todo} onClick={onClickDone} />
    </>
  );
}
