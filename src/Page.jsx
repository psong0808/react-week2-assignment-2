import Input from './Input';
import Todos from './Todos';

export default function Page({
  inputValue, onClickAdd, handleInputChange, todo, onClickDone,
}) {
  return (
    <>
      <h1>To-do</h1>
      <Input
        inputValue={inputValue}
        onClickAdd={onClickAdd}
        handleInputChange={handleInputChange}
      />
      <Todos
        todoList={todo}
        onClick={onClickDone}
      />
    </>
  );
}
