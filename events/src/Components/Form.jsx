import { useState } from "react";

export default function () {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
          type="text"
          value={name.firstname}
        />
        <input
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
          type="text"
          value={name.lastname}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(name.firstname + " " + name.lastname);
          }}
        >
          Add
        </button>
      </form>
    </>
  );
}
