import { configureStore } from "@reduxjs/toolkit";
import stageReducer from "./stageSlice";
import resumeStateReduce from "./isResumeUpSlice";
import jobDetailsReducer from "./jobDetailsSlice";

const store = configureStore({
  reducer: {
    stage: stageReducer,
    isResumeUp: resumeStateReduce,
    jobData: jobDetailsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
