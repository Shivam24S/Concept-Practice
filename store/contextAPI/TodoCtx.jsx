import { createContext, useState } from "react";

export const TodoCtx = createContext({
  todo: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  editingVal: [],
});

const TodoCtxProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editingVal, setEditingVal] = useState(null);

  const addTodo = (input) => {
    if (!input.task || !input.description) {
      alert("please fill the Data");
    } else if (isEditing) {
      setTodo((prevData) =>
        prevData.map((item) =>
          item.id === isEditing
            ? {
                task: input.task,
                description: input.description,
              }
            : item
        )
      );
      setIsEditing(null);
    } else {
      const newValue = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
      };
      setTodo((prevData) => [newValue, ...prevData]);
    }
  };

  //   console.log("TodoData", todo);

  const updateTodo = (id) => {
    const updatingValue = todo.find((item) => item.id === id);
    setEditingVal(updatingValue);
    setIsEditing(id);
  };

  const deleteTodo = (id) => {
    const updatedValue = todo.filter((item) => item.id !== id);
    setTodo(updatedValue);
  };

  const todoCtxValues = {
    todo,
    addTodo,
    updateTodo,
    deleteTodo,
    editingVal,
  };

  return <TodoCtx.Provider value={todoCtxValues}>{children}</TodoCtx.Provider>;
};
export default TodoCtxProvider;
