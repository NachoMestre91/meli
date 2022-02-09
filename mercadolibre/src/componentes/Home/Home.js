import React from 'react';
import './Home.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Busqueda from '../Busqueda/Busqueda';
import ListaResultados from '../ListaResultados/ListaResultados';
import DetalleProducto from '../DetalleProducto/DetalleProducto';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [tablaProductos, setIstablaProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const peticionGet = async () => {
    await axios
      .get('https://my-json-server.typicode.com/NachoMestre91/jsonplaceholder/db')
      .then(response => {
        setProductos(response.data);
        setIstablaProductos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="LP-Home">
      <div className="LI-Home">
        <div className="CP-Busqueda">
          <div className="CI-Busqueda">
            <Busqueda />
          </div>
        </div>
        <div className="CP-Lista-productos">
          <ListaResultados />
          {/* <DetalleProducto /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
