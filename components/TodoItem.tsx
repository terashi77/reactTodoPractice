import * as React from "react";
import { TodoItemInterface } from "./../interfaces/TodoItemInterface";
import Link from "next/link";

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
      <div className="item-detail">
        <Link href={{ pathname: "/detail", query: { id: props.todo.id } }}>
          <a>詳細</a>
        </Link>
      </div>
      <div
        className="item-remove"
        onClick={() => props.handleTodoRemove(props.todo.id)}
      >
        ⨯
      </div>
    </div>
  );
};

export default TodoItem;
