import * as React from 'react';
import { TodoListInterface } from './../interfaces/TodoListInterface';
import TodoItem from './TodoItem';

const TodoList = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li
            className="py-2 px-8 border border-gray-400 text-gray-600 mx-auto w-1/2 text-left flex"
            key={todo.id}
          >
            <TodoItem
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoRemove={props.handleTodoRemove}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
