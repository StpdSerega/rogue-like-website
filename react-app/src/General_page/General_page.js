import React from 'react';
import { Link } from "react-router-dom";

export default function Dashboard() {
  return(
    <div className='General'>
        <h2>Dashboard</h2>
        <Link to="/leaderboard">
            <h2>leaderboard</h2>
        </Link>
        <Link to="/account">
            <h2>User_account</h2>
        </Link>
    </div>
  );
}