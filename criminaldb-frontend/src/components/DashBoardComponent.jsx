import React from 'react'
import '/src/dashboard.css';
import { useNavigate } from 'react-router-dom';

const DashBoardComponent = () => {
    const navigate=useNavigate();
  return (
    <div>
        <header>

      <h1>Criminal Record Management System</h1>
      <ul>
        <li><a href="#" onClick={()=>navigate('/signin')}>Sign In</a></li>
        <li><a href="#" onClick={()=>navigate('/signup')}>Sign Up</a></li>
      </ul>
    
  </header>

  <main>
    <img src="C:\Users\amjad\OneDrive\Desktop\TKM\photo-1453873531674-2151bcd01707.jfif" alt="Criminal Record Image"/>
  </main>

  {/* <footer>
    <p>&copy; 2023 Your Criminal Record Management System. All rights reserved.</p>
  </footer> */}
    </div>
  )
}

export default DashBoardComponent