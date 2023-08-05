import React from 'react'
import '/src/signin.css'
import { useNavigate } from 'react-router-dom'



// function toListAllCriminals(){
//     const navigator=useNavigate();
//     navigator('/all');
// }
function validateForm(navigate) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
  
    usernameError.textContent = "";
    passwordError.textContent = "";
  
    let isValid =true ;
  
    if (username.trim() === "") {
      usernameError.textContent = "Username is required";
      isValid = false;
    }
  
    if (password.trim() === "") {
      passwordError.textContent = "Password is required";
      isValid = false;
    }
  
    if (username !== "admin" || password !== "admin") {
        usernameError.textContent = "Invalid credentials";
        isValid = false;
      }

    if(isValid){
        navigate('/all');
    }
  }
  
  const SignInComponent = () => {
    const navigate = useNavigate(); 
  
    return (
      <div>
        <header>
          <h1>Criminal Record Management System</h1>
          <ul>
            <li><a href="#" onClick={()=>navigate('/')}>Home</a></li>
            <li><a href="#" onClick={()=>navigate('/signup')}>Signup</a></li>
          </ul>
        </header>
        <div className="form-container">
          <h2>Sign In</h2>
          <form onSubmit={() => validateForm(navigate)}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
              <div id="usernameError" className="error-message"></div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
              <div id="passwordError" className="error-message"></div>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        {/* <footer>
          &copy; 2023 Criminal Record Management System
        </footer> */}
      </div>
    );
  }

export default SignInComponent