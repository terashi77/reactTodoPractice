import { TodoInterface } from './TodoInterface';

export interface TodoFormInterface {
  handleTodoCreate: (todo: TodoInterface) => void;
}
