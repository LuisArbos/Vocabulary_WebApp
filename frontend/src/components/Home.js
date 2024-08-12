import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import authService from "./Auth/authService";

const Home = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPassword2, setSignupPassword2] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(loginEmail, loginPassword);
      navigate("/en/practice")
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error(error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (signupPassword !== signupPassword2) {
      console.error("Passwords do not match");
      alert("Passwords do not match");
      return;
    }
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordValidation.test(signupPassword)) {
        console.error("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.");
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.");
        return;
    }

    try {
      await authService.register(signupEmail, signupPassword, signupPassword2);
      navigate("/en/practice")
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error(error);
    }
  };
  return (
  <BaseLayout currentLan="EN">
    <div className="jumbotron">
      <h1 className="display-4">Welcome to VocabApp!</h1>
      <p className="lead">Practice your vocabulary in various languages.</p>
      <div className="container container-secondary">
        <div className="form-section">
          <div className="login-box">
            <form onSubmit={handleLogin}>
              <input type="email" className="email ele" placeholder="youremail@email.com" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
              <input type="password" className="password ele" placeholder="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>
              <button type="Submit" className="clkbtn">Login</button>
            </form>
          </div>
          <div className="signup-box">
            <form onSubmit={handleSignup}>
              <input type="text" className="name ele" placeholder="Enter your name" value={signupName} onChange={(e) => setSignupName(e.target.value)}/>
              <input type="email" className="email ele" placeholder="youremail@email.com" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)}/>
              <input type="password" className="password ele" placeholder="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)}/>
              <input type="password" className="password ele" placeholder="Confirm password" value={signupPassword2} onChange={(e) => setSignupPassword2(e.target.value)}/>
              <button type="submit" className="clkbtn">Signup</button>
            </form>
          </div>
        </div>
        <p className="final-text">Log in or register to track your progress</p>
        <hr className="divider" />
        <p className="final-text">or click below to start practicing now.</p>
        <a className="btn final-button" href="/en/practice">Let's Practice</a>
      </div>
    </div>
  </BaseLayout>
  )
};

  export default Home;