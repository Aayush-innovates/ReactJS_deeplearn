import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const { name } = location.state || {};
  return (
    <>
      <h1>This is Profile for {name}</h1>
    </>
  );
}
