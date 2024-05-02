import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal/modalSlice"
import deckReducer from "./deck/deckSlice"

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    deck: deckReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;