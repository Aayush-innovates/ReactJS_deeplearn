import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [OperationBy, setOperationBy] = useState(1);
  function handleClickI() {
    setCount(count + OperationBy);
  }
  function handleClickD() {
    setCount(count - OperationBy);
  }
  function reset() {
    setCount(0);
  }
  function changeValue() {
    setOperationBy(OperationBy + 1);
  }
  return (
    <>
      <h1>The value of count is {count} </h1>
      <button onClick={handleClickI}>Increment</button>
      <button onClick={handleClickD}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h1>Increment the value by {OperationBy}</h1>
      <button onClick={changeValue}>Increase Increment</button>
    </>
  );
}
