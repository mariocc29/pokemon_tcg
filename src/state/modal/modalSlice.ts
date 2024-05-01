import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalState {
  show: boolean;
  status: 'success' | 'alert' | null;
  message: string | null;
}

const initialState: ModalState = {
  show: false,
  status: null,
  message: null
}

interface TogglePayload {
  show: boolean;
  status: 'success' | 'alert' | null;
  message: string | null;
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<TogglePayload>) => {
      const { show, status, message } = action.payload
      state.show = show
      state.status = status
      state.message = message
    },
  },
})

export const { toggle } = modalSlice.actions;
export default modalSlice.reducer;