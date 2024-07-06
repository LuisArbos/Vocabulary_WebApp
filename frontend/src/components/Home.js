import React from "react";
import BaseLayout from './BaseLayout';

const Home = () => (
    <BaseLayout currentLan="EN">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to VocabApp!</h1>
        <p className="lead">Practice your vocabulary in various languages.</p>
        <div className="container container-secondary">
          <div className="slider"></div>
          <div className="btn">
            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
          </div>
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
        </div>
        <p className="final-text">Log in or register to track your progress, or click below to start practicing now.</p>
        <a className="btn btn-primary" href="/en/practice">Let's Practice</a>
      </div>
    </BaseLayout>
  );
  
  export default Home;