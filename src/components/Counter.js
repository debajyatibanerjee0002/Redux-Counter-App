import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementAsync, decrementAsync } from "../store/counter-actions";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const { value, loading, fulfilled } = useSelector((state) => state.counter);
  const incrementHandler = () => {
    dispatch(incrementAsync());
  };
  const decrementHandler = () => {
    dispatch(decrementAsync());
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {loading && <h5>Loading...</h5>}
        {fulfilled && <h5>Fulfilled...</h5>}
      </div>
      <div className={classes.container}>
        <button onClick={decrementHandler}>Decrement</button>
        <h3>{value}</h3>
        <button onClick={incrementHandler}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
