import * as React from "react";
import { TodoItemInterface } from "./../interfaces/TodoItemInterface";

const TodoItem = (props: TodoItemInterface) => {
  function handleInputEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.currentTarget.blur();
    }
  }

  return (
    <div className="todo-item">
      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleTodoUpdate(event, props.todo.id)
          }
          onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
            handleInputEnter(event)
          }
        />
      </div>
    </div>
  );
};

export default TodoItem;
