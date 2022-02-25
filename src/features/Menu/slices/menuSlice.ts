import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    open: false,
  },
  reducers: {
    closeMenu: (state) => {
      state.open = false;
    },
    openMenu: (state) => {
      state.open = true;
    },
    toggleMenu: (state) => {
      state.open = !state.open;
    }
  },
});

export const { openMenu, closeMenu, toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
