import React from 'react';
import BaseLayout from './BaseLayout';

const HomeEs = () => (
  <BaseLayout currentLan="ES">
    <div className="jumbotron">
      <h1 className="display-4">Bienvenido a VocabApp!</h1>
      <p className="lead">Practica tu vocabulario en varios idiomas.</p>
      <div className="container container-secondary">
        <div className="form-section">
          <div className="login-box">
            <input type="email" className="email ele" placeholder="youremail@email.com" />
            <input type="password" className="password ele" placeholder="password" />
            <button className="clkbtn">Iniciar Sesión</button>
          </div>
          <div className="signup-box">
            <input type="text" className="name ele" placeholder="Enter your name" />
            <input type="email" className="email ele" placeholder="youremail@email.com" />
            <input type="password" className="password ele" placeholder="password" />
            <input type="password" className="password ele" placeholder="Confirm password" />
            <button className="clkbtn">Crear Cuenta</button>
          </div>
        </div>
      <p className="final-text">Inicia sesión o regístrate para seguir tu progreso</p>
      <hr className="divider" />
      <p className="final-text"> o haz click abajo para empezar a practicar ya.</p>
      <a className="btn final-button" href="/es/practice">Practicar ahora</a>
      </div>
    </div>
  </BaseLayout>
);

export default HomeEs;