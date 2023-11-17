import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  loading: false,
  fulfilled: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("counter/loading", (state) => {
        console.log("loading...");
        state.loading = true;
        state.fulfilled = false;
      })
      .addCase("counter/fulfilled", (state) => {
        console.log("fulfilled...");
        state.loading = false;
        state.fulfilled = true;
      });
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
