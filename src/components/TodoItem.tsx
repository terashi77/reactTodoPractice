import * as React from 'react';
import { TodoItemInterface } from '../interfaces/TodoItemInterface';
import Link from 'next/link';

const TodoItem = (props: TodoItemInterface) => {
  function handleInputEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.currentTarget.blur();
    }
  }

  return (
    <div className="todo-item text-center container mx-auto">
      <input
        className="todo-item-input-wrapper inline-block flex-auto px-2 py-2 block focus:shadow appearance-none focus:border focus:rounded text-gray-600 w-2/3 mx-4"
        value={props.todo.title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props.handleTodoUpdate(event, props.todo.id)
        }
        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => handleInputEnter(event)}
      />
      <Link href={{ pathname: '/detail', query: { id: props.todo.id } }}>
        <button className="item-detail inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a>詳細</a>
        </button>
      </Link>
      <button
        className="item-remove　inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
        onClick={() => props.handleTodoRemove(props.todo.id)}
      >
        削除
      </button>
    </div>
  );
};

export default TodoItem;
