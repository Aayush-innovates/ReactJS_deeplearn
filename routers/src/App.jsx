import { useState } from "react";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagenotfound from "./pages/Pagenotfound";
import Profile from "./pages/Profile";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="Profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
