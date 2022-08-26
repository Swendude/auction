import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./store";
import { increase, decrease, reset, change } from "./store/counter/slice";
import { selectCount, selectStudent } from "./store/selectors";
import { getPokemon } from "./store/thunks";
function App() {
  const count = useSelector(selectCount);
  const student = useSelector(selectStudent(count));
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h3>{student}</h3>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => dispatch(increase())}>+</button>
        <button onClick={() => dispatch(decrease())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(change(75))}>+75</button>
      </div>
      <div>
        <button onClick={() => dispatch(getPokemon("ditto"))}>Pikachu</button>
      </div>
    </div>
  );
}

export default App;
