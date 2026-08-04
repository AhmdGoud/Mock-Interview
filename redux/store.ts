import { configureStore } from "@reduxjs/toolkit";
import stageReducer from "./stageSlice";
import dataStateReduce from "./isDataFullSlice";

const store = configureStore({
  reducer: {
    stage: stageReducer,
    isDataFull: dataStateReduce,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
