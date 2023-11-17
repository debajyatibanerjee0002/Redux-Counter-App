import { counterActions } from "./counter-slice";

const LOADING = "counter/loading";
const FULFILLED = "counter/fulfilled";
const REJECTED = "counter/rejected";

export const incrementAsync = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      setTimeout(() => {
        dispatch(counterActions.increment());
        dispatch({ type: FULFILLED });
      }, 1000);
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
};

export const decrementAsync = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      setTimeout(() => {
        dispatch(counterActions.decrement());
        dispatch({ type: FULFILLED });
      }, 1000);
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
};
