import { configureStore } from "@reduxjs/toolkit";
import stageReducer from "./stageSlice";
import dataStateReduce from "./isDataFullSlice";
import jobDetailsReducer from "./jobDetailsSlice";

const store = configureStore({
  reducer: {
    stage: stageReducer,
    isDataFull: dataStateReduce,
    jobData: jobDetailsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
