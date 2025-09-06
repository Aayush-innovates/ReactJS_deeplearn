import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export default function Login() {
  const [value, setValue] = useState("");
  const [user, setUser] = useLocalStorage();

  function handleClick() {
    setUser(value);
    setValue("");
  }
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleClick}>Login</button>
    </>
  );
}
