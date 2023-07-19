import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// recoil for state management.
import { RecoilRoot } from "recoil";
import Login from "./pages/login";
import User from "./pages/user";
import FireFighter from "./pages/fireFighter";
import DispatchCenter from "./pages/dispatchCenter";
import { UserReport, UserHistory, UserProfile } from "./components/helpers";
import PrivateRoutes from "./utils/PrivateRoutes/PrivateRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes roleRequired="USER911" />}>
              <Route element={<User />} path="/user">
                <Route element={<UserReport />} path="/user" />
                <Route element={<UserHistory />} path="/user/history" />
                <Route element={<UserProfile />} path="/user/profile" />
              </Route>
            </Route>
            <Route element={<PrivateRoutes roleRequired="FIREFIGHTER" />}>
              <Route element={<FireFighter />} path="/firefighter" >
                <Route element={<UserReport />} path="/firefighter" />
                <Route element={<UserHistory />} path="/firefighter/history" />
                <Route element={<UserProfile />} path="/firefighter/profile" />
                </Route>
            </Route>
            <Route element={<PrivateRoutes roleRequired="DISPATCH_CENTER" />}>
              <Route element={<DispatchCenter />} path="/dispatch_center">
              <Route element={<UserReport />} path="/dispatch_center" />
                <Route element={<UserHistory />} path="/dispatch_center/history" />
                <Route element={<UserProfile />} path="/dispatch_center/profile" />
              </Route>
            </Route>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
