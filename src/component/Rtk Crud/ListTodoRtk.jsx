import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo } from "../../../store/RTK/slicer/TodoRtk";

const ListTodoRtk = () => {
  const todo = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id) => {
    dispatch(editTodo(id));
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

export default ListTodoRtk;
