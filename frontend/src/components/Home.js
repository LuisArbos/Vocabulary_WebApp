import React from "react";
import BaseLayout from './BaseLayout';

const Home = () => (
  <BaseLayout currentLan="EN">
    <div className="jumbotron">
      <h1 className="display-4">Welcome to VocabApp!</h1>
      <p className="lead">Practice your vocabulary in various languages.</p>
      <div className="container container-secondary">
        <div className="form-section">
          <div className="login-box">
            <input type="email" className="email ele" placeholder="youremail@email.com" />
            <input type="password" className="password ele" placeholder="password" />
            <button className="clkbtn">Login</button>
          </div>
          <div className="signup-box">
            <input type="text" className="name ele" placeholder="Enter your name" />
            <input type="email" className="email ele" placeholder="youremail@email.com" />
            <input type="password" className="password ele" placeholder="password" />
            <input type="password" className="password ele" placeholder="Confirm password" />
            <button className="clkbtn">Signup</button>
          </div>
        </div>
        <p className="final-text">Log in or register to track your progress</p>
        <hr className="divider" />
        <p className="final-text">or click below to start practicing now.</p>
        <a className="btn final-button" href="/en/practice">Let's Practice</a>
      </div>
    </div>
  </BaseLayout>
);
    

  
  export default Home;