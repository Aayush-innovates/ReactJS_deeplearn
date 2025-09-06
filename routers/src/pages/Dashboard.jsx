import Profile from "./Profile";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <Link to="profile">Profile</Link>
      <h1> THis is a Dashboard</h1>
      <Outlet />
    </>
  );
}
