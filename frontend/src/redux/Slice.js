import { createSlice } from "@reduxjs/toolkit";

const divSlice = createSlice({
  name: "div",
  initialState: {
    value: "Insert",
  },
  reducers: {
    setDiv: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDiv } = divSlice.actions;

export default divSlice.reducer;
