import { createSlice } from "@reduxjs/toolkit";

const TodoRtk = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo(state, action) {
      const { id, text } = action.payload;
      const todoToUpdate = state.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.task = text.task;
        todoToUpdate.description = text.description;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = TodoRtk.actions;

export default TodoRtk.reducer;
