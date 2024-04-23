// import ModalContainer from "./component/Ref Dialog/ModalContainer";

import TodoContainer from "./component/Rtk Crud/TodoContainer";

// import TodoCtxContainer from "./component/Context Crud/TodoContainer";

// import FetchContainer from "./component/HTTP Request/FetchContainer";

// import AxiosContainer from "./component/HTTP Request/AxiosContainer";

// import CustomHookContainer from "./component/CustomeHook/CustomHookContainer";

const App = () => {
  return (
    <div>
      {/* modal Dialog Practice using ref and forwardRef */}
      {/* <ModalContainer /> */}

      {/* ContextAPI Crud Todo */}
      {/* <TodoCtxContainer /> */}

      {/* HTTP Request using fetch API And Axios  */}
      {/* <FetchContainer /> */}
      {/* <AxiosContainer /> */}

      {/* fetching Data using customHook */}
      {/* <CustomHookContainer /> */}

      {/* React Redux Tool kit Crud App */}
      <TodoContainer />
    </div>
  );
};

export default App;
