import * as React from "react";
import shortid from "shortid";

import { TodoInterface } from "./../interfaces/TodoInterface";
import { TodoFormInterface } from "./../interfaces/TodoFormInterface";

const TodoForm = (props: TodoFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [formState, setFormState] = React.useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState(event.target.value);
  }

  function handleInputEnter(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      createTodo();
    }
  }

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    createTodo();
    inputRef.current.focus();
  }

  function createTodo() {
    if (formState === "") return;

    const newTodo: TodoInterface = {
      id: shortid.generate(),
      title: formState,
      detail: "",
    };

    props.handleTodoCreate(newTodo);

    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }

    setFormState("");
  }

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter new todo"
        onChange={(event) => handleInputChange(event)}
        onKeyPress={(event) => handleInputEnter(event)}
      />
      <button onClick={(event) => handleClick(event)}>追加</button>
    </div>
  );
};

export default TodoForm;
