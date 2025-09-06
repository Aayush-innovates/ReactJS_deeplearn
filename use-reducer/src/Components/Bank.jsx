import { useReducer, useState } from "react";

export default function Bank() {
  const [amount, setAmount] = useState();
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  function reducer(state, action) {
    if (action.type == "deposit") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type == "withdraw") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  return (
    <>
      <h1>{state.balance}</h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: Number(amount) });
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: Number(amount) });
        }}
      >
        Withdraw
      </button>
    </>
  );
}
