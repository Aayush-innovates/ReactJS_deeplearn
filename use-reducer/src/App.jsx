import { useReducer, useState } from "react";
import Bank from "./Components/Bank";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy };
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - state.incrementBy };
    }
    if (action.type == "setIncrement") {
      return { ...state, incrementBy: action.payload };
    }
  }

  return (
    <>
      <Bank />
      <h1>{state.count}</h1>
      <input
        type="text"
        value={state.incrementBy}
        onChange={(e) => {
          dispatch({ type: "setIncrement", payload: Number(e.target.value) });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment Count
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement Count
      </button>
    </>
  );
}

export default App;
