import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// recoil for state management.
import { RecoilRoot } from "recoil";
import Login from "./pages/login";
import User from "./pages/user";
import FireFighter from "./pages/fireFighter";
import DispatchCenter from "./pages/dispatchCenter";
import PrivateRoutes from "./utils/PrivateRoutes/PrivateRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes roleRequired="USER911" />}>
              <Route element={<User />} path="/user" />
            </Route>
            <Route element={<PrivateRoutes roleRequired="FIREFIGHTER" />}>
              <Route element={<FireFighter />} path="/firefighter" />
            </Route>
            <Route element={<PrivateRoutes roleRequired="DISPATCH_CENTER" />}>
              <Route element={<DispatchCenter />} path="/dispatch_center" />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
