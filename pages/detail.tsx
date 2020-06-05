import * as React from 'react';
import { TodoInterface } from './../interfaces/TodoInterface';
import { useRouter } from 'next/router';
import { useTodos } from './../hooks';
import Link from 'next/link';

export default function Detail() {
  const [todos, setTodos] = useTodos();
  const [selectedTodo, setSelectedTodo] = React.useState<TodoInterface>({
    id: '',
    title: '',
    detail: '',
  });
  const router = useRouter();

  React.useEffect(() => {
    if (todos.length === 0) return;

    const selectedTodo: TodoInterface = todos.find((todo: TodoInterface) => {
      return todo.id === router.query.id;
    });

    setSelectedTodo(selectedTodo);
  }, [todos, selectedTodo]);

  function handleTodoTitleUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.title = event.target.value;
    setTodos(newTodosState);
  }

  function handleTodoDetailUpdate(event: React.ChangeEvent<HTMLTextAreaElement>, id: string) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.detail = event.target.value;
    setTodos(newTodosState);
  }

  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id);
    setTodos(newTodosState);
  }

  return (
    <div className="container">
      <main>
        <h1>Detail page</h1>
        <div className="detail-title">
          <input
            value={selectedTodo.title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleTodoTitleUpdate(event, router.query.id as string)
            }
          ></input>
        </div>
        <div className="detail-detail">
          <textarea
            value={selectedTodo.detail}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleTodoDetailUpdate(event, router.query.id as string)
            }
          ></textarea>
        </div>
        <div className="detail-back-button">
          <Link href={{ pathname: '/' }}>
            <a>戻る</a>
          </Link>
        </div>
        <div
          className="detail-remove-button"
          onClick={() => handleTodoRemove(router.query.id as string)}
        >
          <Link href={{ pathname: '/' }}>
            <a>x</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
