import React from 'react';
import './Menu.css'; // Asegúrate de que también creas el archivo de estilos
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirigir

const Menu = () => {
  const navigate = useNavigate(); // Hook para redirigir a diferentes rutas

  return (
    <div className="menu-container">
      <div className="menu-icon">
        <i className="fas fa-bars"></i>
        <span>MENU</span>
      </div>
      <div className="menu-items">
        <button className="menu-item" onClick={() => navigate('/Granja')}>
          <i className="fas fa-chart-bar"></i> MI GRANJA
        </button>
        <button className="menu-item">
          <i className="fas fa-store"></i> Marketplace
        </button>
        <button className="menu-item">
          <i className="fas fa-chart-line"></i> Agro Inversiones
        </button>
        <button className="menu-item">
          <i className="fas fa-shopping-cart"></i> Carrito
        </button>
        <button className="menu-item">
          <i className="fas fa-cog"></i> Configuración
        </button>
        <button className="menu-item">
          <i className="fas fa-sign-out-alt"></i> SALIR
        </button>
      </div>
    </div>
  );
}

export default Menu;
