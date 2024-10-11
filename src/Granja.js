import React from 'react';
import './Granja.css'; // Importa tus estilos personalizados

function MiGranja() {
    return (
        <div className="container-granja">
            <h1 className="title-granja">MI GRANJA</h1>

            <div className="card-granja">
                <div className="icon-granja">
                    <i className="fas fa-arrow-right"></i> {/* Icono */}
                </div>
                <span className="text-granja">Cultivo en MI UNIDAD</span>
                <i className="fas fa-chevron-right arrow-icon"></i> {/* Icono flecha */}
            </div>

            <div className="card-granja">
                <div className="icon-granja">
                    <i className="fas fa-arrow-right"></i> {/* Icono */}
                </div>
                <span className="text-granja">Cultivo virtual PROGRAMADO</span>
                <i className="fas fa-chevron-right arrow-icon"></i> {/* Icono flecha */}
            </div>
        </div>
    );
}

export default MiGranja;
