import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Lottie from "react-lottie";
import Swal from 'sweetalert2';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { useForm } from "../../hooks/useForm";
import { startLogin, startRegister } from "../../actions/auth";
import noteData from "../../assets/login.json";
import noteData2 from "../../assets/38435-register.json"
import "../../styles/signInAndSignUp.css";

export const LoginScreen = () => {

  const  dispatch = useDispatch()
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "",
    lPassword: "",
  });

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: "",
    rEmail: "",
    rPassword1: "",
    rPassword2: "",
  });

  const { lEmail, lPassword } = formLoginValues;
  const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

  const handleLogin = e => {
    e.preventDefault();
    dispatch( startLogin( lEmail, lPassword))
  }

  const handleRegister = ( e ) => {
    e.preventDefault();

    if ( rPassword1 !== rPassword2 ) {
        return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
    }
    console.log('?')
    dispatch( startRegister( rEmail, rPassword1, rName ) );
}

  const defaultOptions = {
    loop: true,
    autoplay: true,
    renderedSettings: {
      preseveAspectRatio: "xMdidYMid slice",
    },
  };

  return (
    <>
       
      <div
        className={click ? "container-login sign-up-mode" : "container-login"}
      >
        <div className="forms-container">
          <div className="signin-signup">
          <Fade top big cascade>
            <form onSubmit={handleLogin} className="form sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Email"
                  name="lEmail"
                  value={lEmail}
                  onChange={handleLoginInputChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="lPassword"
                  value={lPassword}
                  onChange={handleLoginInputChange}
                />
              </div>
              <input type="submit" value="Login" className="boton solid" />
            </form>
            </Fade>
            <form onSubmit={ handleRegister } className="form sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="rName"
                  value={rName}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Correo"
                  name="rEmail"
                  value={rEmail}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="rPassword1"
                  value={rPassword1}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Repita la contraseña"
                  name="rPassword2"
                  value={rPassword2}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <input type="submit" className="boton" value="Sign up" />
            </form>
           
          </div>
        </div>
        
        <div className="panels-container">
        
          <div className="panel left-panel">
          
            <div className="content">
            <Slide left>
              <h3>¿Eres Nuevo Aquí?</h3>
              <p>
               Registrate para poder usar la aplicación
              </p>
              <button
                onClick={handleClick}
                className="boton transparent"
                id="sign-up-btn"
              >
                Registarse
              </button>
              </Slide>
            </div>
           
            <div className="image">
            <Slide left>
              <Lottie
                options={{ animationData: noteData, ...defaultOptions }}
                height="100%"
                width="100%"
                className="image"
              />
            </Slide>
            </div>
          </div>
         
          <div className="panel right-panel">
          <div className="content">
              <h3>¿ Ya estás registrado?</h3>
              <p>
                Inicia seción para poder usar la aplicación
              </p>
              <button
                onClick={handleClick}
                className="boton transparent"
                id="sign-in-btn"
              >
                Iniciar Secion
              </button>
            </div>
            <div className="image">
              <Lottie
                options={{ animationData: noteData2, ...defaultOptions }}
                height="100%"
                width="100%"
                className="image"
              />
            </div>
          </div>
      
        </div>
      </div>
    
    </>
  );
};
