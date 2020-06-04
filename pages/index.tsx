import * as React from "react";
import TodoList from "./../components/TodoList";
import TodoForm from "./../components/TodoForm";
import { TodoInterface } from "./../interfaces/TodoInterface";

export default function Home() {
  const [todos, setTodos] = React.useState<TodoInterface[]>([
    { id: "xx", title: "yy", detail: "zz" },
    { id: "oo", title: "pp", detail: "qq" },
  ]);

  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.push(todo);
    setTodos(newTodosState);
  }

  function handleTodoUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.title =
      event.target.value;
    setTodos(newTodosState);
  }

  return (
    <div className="container">
      <main>
        <TodoForm handleTodoCreate={handleTodoCreate} />
        <TodoList todos={todos} handleTodoUpdate={handleTodoUpdate} />
      </main>
    </div>
  );
}
