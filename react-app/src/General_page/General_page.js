import React from 'react';
import { Link } from "react-router-dom";
import './General_page.css';

export default function Dashboard() {
  return(
    <div className='General'>
         <div className='General_name'>
           Name of the game
         </div>

        <div className='General_head'>
            <Link to="/leaderboard">
                <h2 className='General_head_text'>leaderboard</h2>
            </Link>

            <Link to="/account">
                <h2 className='General_head_text'>User_account</h2>
            </Link>
        </div>
        <div>

        </div>
    </div>
  );
}