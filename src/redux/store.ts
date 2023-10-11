import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./chartSlice";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
export const store = configureStore({
  reducer: cartReducer,
  preloadedState: persistedState
})
store.subscribe(() => {
    saveState(
      store.getState()
    );
  });