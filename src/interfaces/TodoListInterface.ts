import { TodoInterface } from "./TodoInterface";

export interface TodoListInterface {
  todos: TodoInterface[];
  handleTodoUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleTodoRemove: (id: string) => void;
}
