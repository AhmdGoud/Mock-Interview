import { createSlice } from "@reduxjs/toolkit";

interface DataType {
  isResumeUp: boolean;
  resumeText: string;
}

const initialState: DataType = { isResumeUp: false, resumeText: "" };

const isResumeUp = createSlice({
  name: "isResumeUp",
  initialState,
  reducers: {
    changeResumeStatus: (state) => {
      state.isResumeUp = !state.isResumeUp;
    },

    fillResumeText: (state, action) => {
      state.resumeText = action.payload;
    },
  },
});

export const { changeResumeStatus, fillResumeText } = isResumeUp.actions;
export default isResumeUp.reducer;
