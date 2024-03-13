import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  totalScore: number;
  currentLocation?: number;
}

const initialState: AppState = {
  totalScore: 0,
  currentLocation: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTotalScore: (state, action: PayloadAction<number>) => {
      state.totalScore = action.payload;
    },
    setCurrentLocation: (state, action: PayloadAction<number>) => {
      state.currentLocation = action.payload;
    },
  },
});

export const { setTotalScore, setCurrentLocation } = appSlice.actions;

export default appSlice.reducer;
