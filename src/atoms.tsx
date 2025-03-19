import { atom, selector } from "recoil";

const getLocalData = (localStorage.getItem("todos") as string) || null;
console.log(getLocalData);
const localData: IToDo[] = getLocalData ? JSON.parse(getLocalData) : [];

// delete, localstorage 복습

export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}
export const toDoState = atom<IToDo[]>({
  key: "todos",
  default: localData,
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});
