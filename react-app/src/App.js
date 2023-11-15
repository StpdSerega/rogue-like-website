import React from "react";
import "./App.css";
import "./styles.css";
import "./Auth-components/App/Auth.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Auth-components/Dashboard/Dashboard";
import Preferences from "./Auth-components/Preferences/Preferences";
import useToken from './useToken';
import Login from './Auth-components/Login/Login';
import Leaderboard from "./Leaderboard/Leaderboard";
import UserAccount from "./User_account/User_account"

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
