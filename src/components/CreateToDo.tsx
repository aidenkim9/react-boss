import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodo = useSetRecoilState(toDoState);
  const toDos = useRecoilValue(toDoState);
  const category = useRecoilValue(categoryState);

  const handleValid = ({ toDo }: IForm) => {
    setValue("toDo", "");
    setTodo((current) => [
      ...current,
      { text: toDo, id: Date.now(), category },
    ]);
  };
  localStorage.setItem("todos", JSON.stringify(toDos));
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: true })}
        type="text"
        placeholder="Write your TODO"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
