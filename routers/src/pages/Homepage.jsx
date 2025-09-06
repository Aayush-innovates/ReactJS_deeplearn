import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Homepage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  function handleClick() {
    navigate("/dashboard/profile", { state: { name } });
  }

  return (
    <>
      <h1>This is a Homepage</h1>
      <Link to="/dashboard">Dashboard</Link>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button onClick={handleClick}>GO TO PROFILE</button>
    </>
  );
}
