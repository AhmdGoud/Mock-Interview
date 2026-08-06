import { createSlice } from "@reduxjs/toolkit";

interface DataType {
  jobDescription: string;
  roleTitle: string;
  seniorityLevel: string;
  numberOfQuestions: string;
}

const initialState: DataType = {
  jobDescription: "",
  roleTitle: "",
  seniorityLevel: "",
  numberOfQuestions: "",
};

const jobDetailsSlice = createSlice({
  name: "jobDetails",
  initialState,
  reducers: {
    handelChangeData: (state, action) => {
      const eventData = action.payload;
      return { ...state, [eventData.name]: eventData.value };
    },
  },
});

export const { handelChangeData } = jobDetailsSlice.actions;
export default jobDetailsSlice.reducer;
