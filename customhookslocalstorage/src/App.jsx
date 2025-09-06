import { useState } from "react";
import useDisplayMessage from "./hooks/useDisplayMessage";
import Login from "./Login";

function App() {
  const [message, displayMessage] = useDisplayMessage();
  return (
    <>
      {/* <h1>{message}</h1>
      {displayMessage()} */}
      <Login />
    </>
  );
}

export default App;
