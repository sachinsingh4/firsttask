import { configureStore } from "@reduxjs/toolkit";

import divSlice from "./Slice";
import deptSlice from "./dept.Slice";
export default configureStore({
  reducer: {
    value: divSlice,
    deptValue: deptSlice,
  },
});
