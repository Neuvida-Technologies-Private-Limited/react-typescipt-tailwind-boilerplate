import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// recoil for state management.
import { RecoilRoot } from "recoil";
import Login from "./pages/login";
import PrivateRoutes from './utils/PrivateRoutes/PrivateRoutes';
import "./App.css";

function App() {
  return (
    <div className="App">
    <RecoilRoot>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<div>Hello</div>} path="/" />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        </Router>
    </RecoilRoot>
    </div>
  );
}

export default App;
