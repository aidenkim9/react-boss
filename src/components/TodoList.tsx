import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function TodoList() {
  const [category, setCategory] = useRecoilState(categoryState);
  const todos = useRecoilValue(toDoSelector);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(Number(event.currentTarget.value) as Categories);
  };

  return (
    <div>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>TO DO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      {todos.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
