import * as React from "react";
import TodoList from "./../components/TodoList";
import TodoForm from "./../components/TodoForm";
import { TodoInterface } from "./../interfaces/TodoInterface";
import taskStorage from "./../store/index";

export default function Home() {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  React.useEffect(() => {
    console.log("fetch");
    const fetchedTodos: TodoInterface[] = taskStorage.fetch();
    setTodos(fetchedTodos);
  }, []);

  React.useEffect(() => {
    console.log("update");
    taskStorage.save(todos);
  }, [todos]);

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

  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id
    );
    setTodos(newTodosState);
  }

  return (
    <div className="container">
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
