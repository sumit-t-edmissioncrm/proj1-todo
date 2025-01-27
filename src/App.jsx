import { useEffect, useState } from "react";
import Todos from "./components/Todos";
import DialogBox from "./components/Dialog";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [todoDetails, setTodoDetails] = useState(null);

  const fetchAlltodos = async () => {
    setLoading(true);
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    console.log(data);
    if (data?.todos && data?.todos.length > 0) {
      setTodos(data.todos);
    }
    setLoading(false);
  };

  const fetchDetailsOfCurrentTodo = async (currentTodoId) => {
    const response = await fetch(
      `https://dummyjson.com/todos/${currentTodoId}`
    );
    const data = await response.json();
    if (data) {
      setTodoDetails(data);
      setOpenDialog(true);
    } else {
      setTodoDetails(data);
      setOpenDialog(false);
    }
  };

  useEffect(() => {
    fetchAlltodos();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-6xl">HELLLO</h1>
        <div className="grid grid-cols-4 gap-4">
          {todos && todos?.length > 0
            ? todos.map((todo) => {
                return (
                  <Todos
                    fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    key={todo.id}
                    todo={todo}
                  />
                );
              })
            : null}
        </div>
        {todoDetails && (
          <DialogBox
            todoDetails={todoDetails}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        )}
      </div>
    </>
  );
}

export default App;
