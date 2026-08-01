import { configureStore } from "@reduxjs/toolkit";
import stageReducer from "./stageSlice";

const store = configureStore({
  reducer: {
    stage: stageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
