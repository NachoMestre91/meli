import React from 'react';
import './Home.css';
import Busqueda from '../Busqueda/Busqueda';
import ListaResultados from '../ListaResultados/ListaResultados';
import DetalleProducto from '../DetalleProducto/DetalleProducto';

const Home = () => {
  return (
    <div className="LP-Home">
      <div className="LI-Home">
        <div className="CP-Busqueda">
          <div className="CI-Busqueda">
            <Busqueda />
          </div>
        </div>
        <div className="CP-Lista-productos">
          {/* <ListaResultados /> */}
          <DetalleProducto />
        </div>
      </div>
    </div>
  );
};

export default Home;
