import { useContext, useEffect, useState } from "react";
import { TodoCtx } from "../../../store/contextAPI/TodoCtx";

const AddTodoCtx = () => {
  const [input, setInput] = useState({
    task: "",
    description: "",
  });

  const handleChange = (identifier, e) => {
    setInput((prevVal) => {
      return {
        ...prevVal,
        [identifier]: e.target.value,
      };
    });
  };

  const { addTodo, editingVal } = useContext(TodoCtx);

  const handleAdd = () => {
    addTodo(input);
    setInput({ task: "", description: "" });
  };

  useEffect(() => {
    editingVal ? setInput(editingVal) : null;
  }, [editingVal]);

  return (
    <>
      <input
        type="text"
        placeholder="Task"
        value={input.task}
        onChange={(e) => {
          handleChange("task", e);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={input.description}
        onChange={(e) => {
          handleChange("description", e);
        }}
      />
      <br />
      <br />
      <button onClick={handleAdd}>{editingVal ? "update" : "Add"}</button>
    </>
  );
};
export default AddTodoCtx;
