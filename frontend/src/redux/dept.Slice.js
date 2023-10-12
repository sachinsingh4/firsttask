import { createSlice } from "@reduxjs/toolkit";

const deptSlice = createSlice({
  name: "dept",
  initialState: {
    deptValue: [],
  },
  reducers: {
    setDept: (state, action) => {
      state.deptValue = action.payload;
    },
  },
});

export const { setDept } = deptSlice.actions;

export default deptSlice.reducer;
