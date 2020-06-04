import * as React from "react";
import { TodoItemInterface } from "./../interfaces/TodoItemInterface";

const TodoItem = (props: TodoItemInterface) => {
  return (
    <div className="todo-item">
      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleTodoUpdate(event, props.todo.id)
          }
        />
      </div>
    </div>
  );
};

export default TodoItem;
