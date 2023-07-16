import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// recoil for state management.
import { RecoilRoot } from "recoil";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<div>Home </div>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
