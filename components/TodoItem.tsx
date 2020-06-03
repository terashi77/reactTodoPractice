import * as React from 'react';
import { TodoItemInterface } from './../interfaces/TodoItemInterface';

const TodoItem = (props: TodoItemInterface) => {
  return (
    <div className="todo-item">
      <div className="todo-item-input-wrapper">
        <input value={props.todo.title} />
      </div>
    </div>
  );
};

export default TodoItem;
