import { useContext } from "react";
import { TodoCtx } from "../../../store/contextAPI/TodoCtx";

const ListTodo = () => {
  const { todo, updateTodo, deleteTodo } = useContext(TodoCtx);

  const handleEdit = (id) => {
    updateTodo(id);
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <>
      <table border={"2px solid Black"} cellSpacing={"5px"} cellPadding={"3px"}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th colSpan={"2"}>Action</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((item) => (
            <tr key={item.id}>
              <td>{item.task}</td>
              <td>{item.description}</td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(item.id);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ListTodo;
