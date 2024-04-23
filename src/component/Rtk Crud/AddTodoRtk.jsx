import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/RTK/slicer/TodoRtk";

const AddTodoRtk = () => {
  const [input, setInput] = useState({
    task: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleChange = (identifier, e) => {
    setInput((prevVal) => {
      return {
        ...prevVal,
        [identifier]: e.target.value,
      };
    });
  };

  const handleAdd = () => {
    dispatch(
      addTodo({
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
      })
    );
  };

  console.log("inputCheck", input);

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
      <input
        type="text"
        placeholder="Description"
        value={input.description}
        onChange={(e) => {
          handleChange("description", e);
        }}
      />
      <br />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default AddTodoRtk;
