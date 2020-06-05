import { TaskStrorageInterface } from './TaskStorageInterface';
import { TodoInterface } from '../interfaces/TodoInterface';

const STORAGE_KEY: string = 'TODO-List';

const taskStorage: TaskStrorageInterface = {
  fetch() {
    const tasks: TodoInterface[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return tasks;
  },
  save(tasks: TodoInterface[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  },
};

export default taskStorage;
