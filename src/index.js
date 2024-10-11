import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Asegúrate de que esta ruta sea correcta
import App from './App'; // Importa el componente App correctamente
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa las herramientas de routing
import Dashboard from './Dashboard.js'; // Importa el componente Dashboard que crearás
import Menu from './Menu.js';
import MiGranja from './Granja.js'; // Importa el componente

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define las rutas aquí */}
        <Route path="/" element={<App />} /> {/* Ruta para la página de login */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta para el dashboard */}
        <Route path="/menu" element={<Menu />} /> {/* Ruta para el Menu */}
        <Route path="/Granja" element={<MiGranja />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
