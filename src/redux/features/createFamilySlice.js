import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const createFamilySlice = createSlice({
  name: "createfamily",
  initialState,
  reducers: {
    addFamilyMember: (state, action) => {
      state.value.push(action.payload)
    },
  },
});

export const {addFamilyMember} = createFamilySlice.actions;

export default createFamilySlice.reducer;
