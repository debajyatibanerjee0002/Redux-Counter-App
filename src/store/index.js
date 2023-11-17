import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import counterReducer from "./counter-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [thunk],
});

export default store;
