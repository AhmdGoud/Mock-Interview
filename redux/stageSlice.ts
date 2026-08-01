import { createSlice } from "@reduxjs/toolkit";

interface StageType {
  value: number;
}

const initState: StageType = { value: 0 };

const stageSlice = createSlice({
  name: "stage",
  initialState: initState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = stageSlice.actions;
export default stageSlice.reducer;
