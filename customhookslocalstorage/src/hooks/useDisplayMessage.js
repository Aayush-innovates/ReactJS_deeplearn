import { useState } from "react";

export default function useDisplayMessage() {
  const [message, setMessage] = useState("aayush");
  function displayMessage() {
    return "this is a message";
  }
  return [message, displayMessage];
}
