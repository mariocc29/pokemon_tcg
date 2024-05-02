import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import DeckData from "/@interfaces/deck_data";

interface DeckState {
  deck: DeckData | null;
}

const initialState: DeckState = {
  deck: null,
}

interface TogglePayload {
  deck: DeckData | null
}

const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<TogglePayload>) => {
      state.deck = action.payload
    }
  },
})

export const { toggle } = deckSlice.actions;
export default deckSlice.reducer;