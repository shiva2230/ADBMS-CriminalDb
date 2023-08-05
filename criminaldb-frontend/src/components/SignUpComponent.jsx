import React from 'react';
import '/src/signup.css'; // Import your CSS file with styles
import { useNavigate } from 'react-router-dom';

const SignUpComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Criminal Record Management System</h1>
        <ul>
          <li><a href="#" onClick={()=>navigate('/')}>Home</a></li>
          <li><a href="#" onClick={()=>navigate('/signin')}>Sign in</a></li>
        </ul>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent form submission to avoid page reload
          navigate('/signin'); // Navigate to the sign-in page
        }}
        className="signup-form"
      >
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

          <label>
            <input type="checkbox" defaultChecked={true} name="remember" style={{ marginBottom: '15px' }} /> Remember me
          </label>

          <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

          <div className="clearfix">
            <button type="button" className="cancelbtn" onClick={()=>navigate('/signin')}>Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>

      {/* <footer>
        &copy; 2023 Criminal Record Management System
      </footer> */}
    </div>
  );
}

export default SignUpComponent;
