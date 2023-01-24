import { configureStore } from "@reduxjs/toolkit";
import createfamilyReducer from "./features/createFamilySlice";


export const store = configureStore({
  reducer: {
    createfamily: createfamilyReducer,

  },
});
