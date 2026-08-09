import { createSlice } from "@reduxjs/toolkit";

interface QuestionsType {
  questions: string[];
}

const initialState: QuestionsType = {
  questions: [],
};

const interviewSlice = createSlice({
  name: "interviewQuestions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { setQuestions } = interviewSlice.actions;
export default interviewSlice.reducer;
