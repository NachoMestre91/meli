import React from 'react';
import './DetalleProducto.css';
import ImagenProducto from '../../static/img/imagen-producto.png';
import Imagen from '../Imagen/Imagen';

const DetalleProducto = () => {
  return (
    <div className="CP-Detalle-Producto">
      <div className="CI-Detalle-Producto">
        <div className="I-Detalle-Producto">
          {/* <img src={ImagenProducto} className="imagen-producto" alt=""></img> */}
          <Imagen />
        </div>
        <div className="I-Detalle-compra">
          <div className="Etiqueta-cantidad">
            <h5>Etiqueta cantidad</h5>
          </div>
          <div className="Nombre-producto">
            <h3>Nombre producto</h3>{' '}
          </div>
          <div className="Precio-producto">
            <h3>$1.990</h3>{' '}
          </div>

          <div>
            {' '}
            <button className="Boton">COMPRAR</button>{' '}
          </div>
        </div>
        <div className="I-descripcion-producto">
          <div className="Titulo-producto">
            <h2>Titulo</h2>
          </div>
          <div className="Descripcion-producto">
            <p className="I-descripcion-producto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
