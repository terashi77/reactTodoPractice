import { TodoInterface } from '../interfaces/TodoInterface';

export interface TaskStrorageInterface {
  fetch: () => TodoInterface[];
  save: (tasks: TodoInterface[]) => void;
}
