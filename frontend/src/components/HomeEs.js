import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import authService from "./Auth/authService";

const HomeEs = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPassword2, setSignupPassword2] = useState('');
  const navigate = useNavigate();

  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    passwordsMatch: false,
  });

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setSignupPassword(value);

    setPasswordValidation({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /[0-9]/.test(value),
      passwordsMatch: value === signupPassword2,
    });
  };

  const [focusedField, setFocusedField] = useState(null);//Need this to know if the user is in the password field
  const [emailError, setEmailError] = useState(''); //Track email error
  const [loginError, setLoginError] = useState(''); //Track login error

  const handlePassword2Change = (e) => {
    const { value } = e.target;
    setSignupPassword2(value);

    // Update match state
    setPasswordValidation(prevState => ({
      ...prevState,
      passwordsMatch: value === signupPassword,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setEmailError(''); //Clear previous errors
    console.log('Signup submited')
    try {
      await authService.register(signupEmail, signupPassword, signupPassword2);
      navigate("/es/practice")
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      if (error.response && error.response.data.error === "Email is already registered") {
        setEmailError("Este email ya ha sido registrado.");
      } else {
      console.error(error);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      await authService.login(loginEmail, loginPassword);
      navigate("/es/practice")
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      if (error.response && error.response.data.error === "Invalid credentials") {
        setLoginError("Email o contraseña incorrectos.");
      } else {
      console.error(error);
      }
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
              {loginError && (
                <p className="login-error">{loginError}</p>
              )}
              <button type="Submit" className="clkbtn">Iniciar Sesión</button>
            </form>
          </div>
          <div className="signup-box">
            <form onSubmit={handleSignup}>
              <input type="text" className="name ele" placeholder="Introduce tu nombre" value={signupName} onChange={(e) => setSignupName(e.target.value)}/>
              <div className="email-wrapper">
                <input type="email" className="email ele" placeholder="tuemail@email.com" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)}/>
                {emailError && (
                    <p className="email-error">{emailError}</p>
                  )}
              </div>
              <div className="password-wrapper">
                <input type="password" className="password ele" placeholder="contraseña" value={signupPassword} onFocus={() => setFocusedField('password1')} onBlur={() => setFocusedField(null)} onChange={handlePasswordChange}/>
                {focusedField === 'password1' && (
                    <div className="password-popup">
                      <p className={passwordValidation.length ? 'valid' : 'invalid'}>
                        {passwordValidation.length ? '✔' : '✘'} Mínimo 8 caracteres
                      </p>
                      <p className={passwordValidation.uppercase ? 'valid' : 'invalid'}>
                        {passwordValidation.uppercase ? '✔' : '✘'} Mayúscula
                      </p>
                      <p className={passwordValidation.lowercase ? 'valid' : 'invalid'}>
                        {passwordValidation.lowercase ? '✔' : '✘'} Minúscula
                      </p>
                      <p className={passwordValidation.number ? 'valid' : 'invalid'}>
                        {passwordValidation.number ? '✔' : '✘'} Número
                      </p>
                    </div>
                  )}
              </div>
              <div className="password-wrapper">
                <input type="password" className="password ele" placeholder="Confirma contraseña" value={signupPassword2} onFocus={() => setFocusedField('password2')} onBlur={() => setFocusedField(null)} onChange={handlePassword2Change}/>
                  {focusedField === 'password2' && (
                    <div className="password-popup">
                      <p className={passwordValidation.length ? 'valid' : 'invalid'}>
                        {passwordValidation.length ? '✔' : '✘'} Mínimo 8 caracteres
                      </p>
                      <p className={passwordValidation.uppercase ? 'valid' : 'invalid'}>
                        {passwordValidation.uppercase ? '✔' : '✘'} Mayúscula
                      </p>
                      <p className={passwordValidation.lowercase ? 'valid' : 'invalid'}>
                        {passwordValidation.lowercase ? '✔' : '✘'} Minúscula
                      </p>
                      <p className={passwordValidation.number ? 'valid' : 'invalid'}>
                        {passwordValidation.number ? '✔' : '✘'} Número
                      </p>
                    </div>
                  )}
                  {signupPassword2 && signupPassword !== signupPassword2 && (
                      <p className="password-match-error">Las contraseñas no coinciden</p>
                  )}
              </div>
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