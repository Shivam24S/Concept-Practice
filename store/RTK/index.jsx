import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./slicer/TodoRtk";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
export default store;
