import * as React from 'react';
import { TodoListInterface } from './../interfaces/TodoListInterface';
import TodoItem from './TodoItem';

const TodoList = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
