import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import SignUpPage from "./pages/SignUpPage";
import UserInfoEditPage from "./pages/UserInfoEditPage";
// import styled from "styled-components";
// import { useEffect, useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <li>
            <Link to="/LoadingPage">LoadingPage</Link>
          </li>
          <li>
            <Link to="/LoginPage">LoginPage</Link>
          </li>
          <li>
            <Link to="/SignUpPage">SignUpPage</Link>
          </li>
          <li>
            <Link to="/SettingsPage">SettingsPage</Link>
          </li>
          <li>
            <Link to="/UserInfoEditPage">UserInfoEditPage</Link>
          </li>
        </nav>
        <Routes>
          <Route path="/LoadingPage" element={<LoadingPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/SettingsPage" element={<SettingsPage />} />
          <Route path="/UserInfoEditPage" element={<UserInfoEditPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
