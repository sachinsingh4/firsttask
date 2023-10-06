import { configureStore } from "@reduxjs/toolkit";

import divSlice from "./Slice";

export default configureStore({
  reducer: {
    value: divSlice,
  },
});
