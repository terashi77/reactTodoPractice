import * as React from "react";
import { TodoInterface } from "./../interfaces/TodoInterface";
import { useRouter } from "next/router";
import taskStorage from "./../store/index";

export default function Detail() {
  // const [todos, setTodos] = React.useState<TodoInterface[]>([]);
  const [selectedTodo, setSelectedTodo] = React.useState<TodoInterface>({
    id: "",
    title: "",
    detail: "",
  });
  const router = useRouter();
  // console.log(router.query.id);

  const setup = async () => {
    const fetchedTodos: TodoInterface[] = await taskStorage.fetch();

    const id = await router.query.id;

    const selectedTodo: TodoInterface = await fetchedTodos.find(
      (todo: TodoInterface) => {
        console.log(todo.id);
        return todo.id === id;
      }
    );

    console.log(selectedTodo);

    await setSelectedTodo(selectedTodo);
  };

  React.useEffect(() => {
    console.log("fetch");
    setup();
    // const fetchedTodos: TodoInterface[] = taskStorage.fetch();

    // const id = router.query.id;

    // const selectedTodo: TodoInterface = fetchedTodos.find(
    //   (todo: TodoInterface) => {
    //     console.log(todo.id);
    //     return todo.id === id;
    //   }
    // );
    // setSelectedTodo(selectedTodo);
  }, []);

  // React.useEffect(() => {
  //   console.log("update");
  //   taskStorage.save(todos);
  // }, [todos]);

  return (
    <div className="container">
      <main>
        <h1>Detail page</h1>

        {/* <div className="detail-title">
          <input value={selectedTodo.title}></input>
        </div>
        <div className="detail-detail">
          <textarea value={selectedTodo.detail}></textarea>
        </div> */}
      </main>
    </div>
  );
}
