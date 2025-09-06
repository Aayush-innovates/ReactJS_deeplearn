import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import Conditional from "./components/Conditional";

function App() {
  const seatNumbers = [1, 2, 3];
  const person = { name: "Aayush", seatNumber: [1, 4, 4] };
  return (
    <>
      <Hello person={person} />

      <Fruits />
      <Conditional />
    </>
  );
}

export default App;
