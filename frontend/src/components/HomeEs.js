import React, {useState} from "react";
import BaseLayout from './BaseLayout';
import authService from './Auth/authService';

const HomeEs = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPassword2, setSignupPassword2] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(loginEmail, loginPassword);
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error(error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await authService.register(signupEmail, signupPassword, signupPassword2);
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error(error);
    }
  };

  return (
  <BaseLayout currentLan="ES">
    <div className="jumbotron">
      <h1 className="display-4">Bienvenido a VocabApp!</h1>
      <p className="lead">Practica tu vocabulario en varios idiomas.</p>
      <div className="container container-secondary">
        <div className="form-section">
          <div className="login-box">
          <form onSubmit={handleLogin}>
              <input type="email" className="email ele" placeholder="tuemail@email.com" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
              <input type="password" className="password ele" placeholder="contraseña" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>
              <button type="Submit" className="clkbtn">Iniciar Sesión</button>
            </form>
          </div>
          <div className="signup-box">
            <form onSubmit={handleSignup}>
              <input type="text" className="name ele" placeholder="Introduce tu nombre" value={signupName} onChange={(e) => setSignupName(e.target.value)}/>
              <input type="email" className="email ele" placeholder="tuemail@email.com" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)}/>
              <input type="password" className="password ele" placeholder="contraseña" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)}/>
              <input type="password" className="password ele" placeholder="Confirma contraseña" value={signupPassword2} onChange={(e) => setSignupPassword2(e.target.value)}/>
              <button type="submit" className="clkbtn">Crear Cuenta</button>
            </form>
          </div>
        </div>
      <p className="final-text">Inicia sesión o regístrate para seguir tu progreso</p>
      <hr className="divider" />
      <p className="final-text"> o haz click abajo para empezar a practicar ya.</p>
      <a className="btn final-button" href="/es/practice">Practicar ahora</a>
      </div>
    </div>
  </BaseLayout>
  )
};

export default HomeEs;