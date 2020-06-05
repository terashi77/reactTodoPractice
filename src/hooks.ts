import { useState, useEffect, ChangeEvent } from 'react';
import { TodoInterface } from './interfaces/TodoInterface';
import taskStorage from './store/index';

export function useTodos() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    console.log('fetch');
    const fetchedTodos: TodoInterface[] = taskStorage.fetch();
    setTodos(fetchedTodos);
  }, []);

  useEffect(() => {
    console.log('update');
    taskStorage.save(todos);
  }, [todos]);

  return [todos, setTodos] as const;
}
