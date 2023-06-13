import Todo from './Todo';

export default function Todos({ todoList, onClick }) {
  return (
    <div>
      <>
        {todoList.length === 0 ? <p>할 일이 없어요!</p> : null}
      </>
      <>
        {todoList.map((todo) => {
          const index = todoList.indexOf(todo);
          return <Todo index={index} content={todo} key={todo} onClick={() => onClick(index)} />;
        })}
      </>
    </div>
  );
}
