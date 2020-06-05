import { useState, useEffect, ChangeEvent } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { TodoInterface } from '../interfaces/TodoInterface';
import { useTodos } from '../hooks';

export default function Home() {
  const [todos, setTodos] = useTodos();

  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.push(todo);
    setTodos(newTodosState);
  }

  function handleTodoUpdate(event: ChangeEvent<HTMLInputElement>, id: string) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.title = event.target.value;
    setTodos(newTodosState);
  }

  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id);
    setTodos(newTodosState);
  }

  return (
    <div className="text-center container mx-auto">
      <main>
        <TodoForm handleTodoCreate={handleTodoCreate} />
        <TodoList
          todos={todos}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoRemove={handleTodoRemove}
        />
      </main>
    </div>
  );
}
