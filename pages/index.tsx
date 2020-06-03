import * as React from 'react';
import TodoList from './../components/TodoList';
import TodoForm from './../components/TodoForm';
import { TodoInterface } from './../interfaces/TodoInterface';

export default function Home() {
  const [todos, setTodos] = React.useState<TodoInterface[]>([
    { id: 'xx', title: 'yy', detail: 'zz' },
    { id: 'oo', title: 'pp', detail: 'qq' },
  ]);

  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.push(todo);
    setTodos(newTodosState);
  }

  return (
    <div className="container">
      <main>
        <TodoForm handleTodoCreate={handleTodoCreate} />
        <TodoList todos={todos} />
      </main>
    </div>
  );
}
