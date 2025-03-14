import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  function onChange(event: React.FormEvent<HTMLInputElement>) {
    const {
      currentTarget: { value },
    } = event;
    return setTodo(value);
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your todo"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
