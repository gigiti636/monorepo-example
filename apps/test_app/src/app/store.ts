import { configureStore } from "@reduxjs/toolkit";
//provider slices
import reducerUser from "common_lib/providers/multilang/reducerClient";

const reducer = {
  client: reducerClient,
  user: reducerUser,
};
export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
