import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import './App.css';


function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [showRecoverPassword, setShowRecoverPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Hook para redirección

  const handleRecoverPasswordClick = () => {
    setShowRecoverPassword(true);
  };

  const handleBackToLoginClick = () => {
    setShowRecoverPassword(false);
  };

  const crearPerfil = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email || !password) {
      setError("El email y la contraseña son requeridos.");
      setLoading(false);
      return;
    }

    try {
      // Realizar una solicitud GET sin parámetros
      const url = `http://localhost:8081/user/registrarUsuario?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}
      &telefono=${encodeURIComponent(password)}&confirmacion=${encodeURIComponent(password)}`;
      const response = await fetch(url, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud de login.');
      }

      const data = await response.text();
      console.log('Respuesta de la API:', data);

      navigate('/dashboard'); // Redireccionar al dashboard si la API responde correctamente

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //NUEVO BOTON LOGIN0
  const Loguearse = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email || !password) {
      setError("El email y la contraseña son requeridos.");
      setLoading(false);
      return;
    }

    try {
      // Realizar una solicitud GET sin parámetros
      //CAMBIAR ENDPOINT POR EL NUEVO(TE LA PASA TU PAPA IVAN)
      const url = `http://localhost:8081/user/registrarUsuario?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
      const response = await fetch(url, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud de login.');
      }

      const data = await response.json;
      console.log('Respuesta de la API:', data);
      navigate('/menu');
      /*if(data.codigo == 200){
       navigate('/menu');
      }else{
        //DEVOLVER MENSAJE DE ERROR AL FRONT
      }*/

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/injaus.png`}
            alt="INJAUS | Cultiva bienestar"
          />
        </div>
        {!showRecoverPassword ? (
          <>
            <h1 className="login-title">INJAUS | Cultiva bienestar</h1>
            <div className="tabs">
              <button
                className={`tab ${activeTab === "login" ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`tab ${activeTab === "create" ? "active" : ""}`}
                onClick={() => setActiveTab("create")}
              >
                Create Profile
              </button>
            </div>

            {activeTab === "login" ? (
              <>
                <form>
                  <div className="input-group">
                    <i className="input-icon fas fa-envelope"></i>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <i className="input-icon fas fa-lock"></i>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <i
                      className="toggle-password fas fa-eye"
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                  </div>
                  <div className="forgot-password" onClick={handleRecoverPasswordClick}>
                    Forgot password?
                  </div>
                  <button type="submit" className="login-button" onClick={Loguearse}>
                    {loading ? "Cargando..." : "Login"}
                  </button>
                </form>
                {error && <p>Error: {error}</p>}
              </>
            ) : (
              <form>
                <div className="input-group">
                  <i className="input-icon fas fa-envelope"></i>
                  <input type="email" placeholder="Email address" />
                </div>
                <div className="input-group">
                  <i className="input-icon fas fa-phone"></i>
                  <input type="tel" placeholder="+XXX XXXXXXX" />
                </div>
                <div className="input-group">
                  <i className="input-icon fas fa-lock"></i>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <i
                    className="toggle-password fas fa-eye"
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>
                <div className="input-group">
                  <i className="input-icon fas fa-lock"></i>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                  />
                  <i
                    className="toggle-password fas fa-eye"
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>
                <button type="submit" className="login-button" onClick={crearPerfil}>
                  Crear perfil
                </button>
              </form>
            )}
          </>
        ) : (
          <div className="recover-container">
            <h1 className="recover-title">Recuperar contraseña</h1>
            <form className="recover-form">
              <div className="input-group">
                <i className="input-icon fas fa-envelope"></i>
                <input type="email" placeholder="Email address" />
              </div>
              <button type="submit" className="recover-button">
                Recuperar contraseña
              </button>
              <button onClick={handleBackToLoginClick} className="recover-button">
                Volver al Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App; 