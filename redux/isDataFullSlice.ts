import { createSlice } from "@reduxjs/toolkit";

interface DataFullType {
  value: boolean;
}

const initialState: DataFullType = { value: false };

const isDataFull = createSlice({
  name: "isDataFull",
  initialState,
  reducers: {
    changeDataState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeDataState } = isDataFull.actions;
export default isDataFull.reducer;
