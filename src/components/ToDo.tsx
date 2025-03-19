import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setTodos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setTodos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      console.log(targetIndex);
      const newTodo = { text, id, category: Number(name) as Categories };
      return [
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const deleteTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todos) => todos.id === id);
      const deletedTodo = [
        ...oldTodos.slice(0, targetIndex),
        ...oldTodos.slice(targetIndex + 1),
      ];
      return deletedTodo;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO + ""} onClick={onClick}>
          TO DO
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING + ""} onClick={onClick}>
          DOING
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE + ""} onClick={onClick}>
          DONE
        </button>
      )}
      <button onClick={deleteTodo}>
        <span>❌</span>
      </button>
    </li>
  );
}

export default ToDo;
