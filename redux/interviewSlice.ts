import { createSlice } from "@reduxjs/toolkit";

interface QuestionsType {
  questions: string;
  answers: string[];
  result: string;
}

const initialState: QuestionsType = {
  questions: "",
  answers: [],
  result: "",
};

const interviewSlice = createSlice({
  name: "interviewQuestions",
  initialState,
  reducers: {
    updateQuestions: (state, action) => {
      state.questions = action.payload;
    },

    updateAnswers: (state, action) => {
      state.answers = [...state.answers, action.payload];
    },

    updateResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { updateQuestions, updateAnswers, updateResult } =
  interviewSlice.actions;
export default interviewSlice.reducer;
