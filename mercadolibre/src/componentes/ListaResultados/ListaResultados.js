import React from 'react';
import TarjetaProducto from './TarjetaProducto';
import './ListaResultados.css';

const ListaResultados = () => {

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };


  const filtrar = terminoBusqueda => {
    var resultadosBusqueda = setIstablaProductos.filter(elemento => {
      if (
        elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProductos(resultadosBusqueda);

  return (
    <div className="CP-Contenedor-Lista">
      <div className="CI-Tarjeta-producto">
      {productos && 
        productos.map((usuario)=>(
        <TarjetaProducto />
        ))}
   
      </div>
    </div>
  );
};

export default ListaResultados;
