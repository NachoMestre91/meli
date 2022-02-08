import React from 'react';
import './Imagen.css';
import ImagenProducto from '../../static/img/imagen-producto.png';

const Image = () => {
  return (
    <>
      <div className="CP-Imagen">
        <img alt="" src={ImagenProducto} className="Imagen"></img>
      </div>
    </>
  );
};

export default Image;
