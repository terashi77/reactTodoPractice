import * as React from 'react';
import { TodoInterface } from '../interfaces/TodoInterface';
import { useRouter } from 'next/router';
import { useTodos } from '../hooks';
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
    <div className="text-center container mx-auto">
      <main>
        <h1 className="font-semibold text-4xl text-blue-500">Detail page</h1>
        <div>
          <input
            className="detail-title block shadow appearance-none border rounded py-2 px-3 text-gray-600 my-4 w-1/2 mx-auto"
            value={selectedTodo.title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleTodoTitleUpdate(event, router.query.id as string)
            }
          ></input>
        </div>
        <div>
          <textarea
            className="detail-detail block shadow appearance-none border rounded py-2 px-3
    text-gray-600 mx-2 my-4 w-1/2 h-64 mx-auto"
            value={selectedTodo.detail}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleTodoDetailUpdate(event, router.query.id as string)
            }
          ></textarea>
        </div>
        <Link href={{ pathname: '/' }}>
          <button className="detail-back-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a>戻る</a>
          </button>
        </Link>
        <Link href={{ pathname: '/' }}>
          <button
            className="detail-remove-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded"
            onClick={() => handleTodoRemove(router.query.id as string)}
          >
            <a>削除</a>
          </button>
        </Link>
      </main>
    </div>
  );
}
