import { configureStore } from "@reduxjs/toolkit";
import stageReducer from "./stageSlice";
import resumeStateReduce from "./isResumeUpSlice";
import jobDetailsReducer from "./jobDetailsSlice";
import interviewQuestions from "./interviewSlice";

const store = configureStore({
  reducer: {
    stage: stageReducer,
    isResumeUp: resumeStateReduce,
    jobData: jobDetailsReducer,
    interview: interviewQuestions,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
