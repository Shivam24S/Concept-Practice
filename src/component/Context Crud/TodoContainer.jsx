import TodoCtxProvider from "../../../store/contextAPI/TodoCtx";
import AddTodoCtx from "./AddTodoCtx";
import ListTodo from "./ListTodoCtx";

const TodoCtxContainer = () => {
  return (
    <>
      {/* i m using context provider here not in app component due to code readability and i will do another project also so.. */}
      <TodoCtxProvider>
        <AddTodoCtx />
        <br />
        <br />
        <ListTodo />
      </TodoCtxProvider>
    </>
  );
};
export default TodoCtxContainer;
