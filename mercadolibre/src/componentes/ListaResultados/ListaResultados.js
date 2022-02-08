import React from 'react';
import TarjetaProducto from './TarjetaProducto';
import './ListaResultados.css';

const ListaResultados = () => {
  return (
    <div className="CP-Contenedor-Lista">
      <div className="CI-Tarjeta-producto">
        <TarjetaProducto />
        <TarjetaProducto />
        <TarjetaProducto />
        <TarjetaProducto />
      </div>
    </div>
  );
};

export default ListaResultados;
