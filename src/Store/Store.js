import { configureStore } from "@reduxjs/toolkit";
import JobReducer from "./modules/Job";
export default configureStore({
  reducer: {
    job: JobReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
