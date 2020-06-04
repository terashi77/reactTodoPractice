import { TodoInterface } from "./TodoInterface";

export interface TodoItemInterface {
  todo: TodoInterface;
  handleTodoUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
}
