import React from 'react';
import './TarjetaProducto.css';
import Imagen from '../Imagen/Imagen';
import EnvioIcono from '../../static/img/ic_shipping@2x.png.png';
const TarjetaProducto = () => {
  return (
    <>
      <div className="CP-Tarjeta-Producto">
        <div className="CI-Tarjeta-Producto">
          <div className="I-Tarjeta-Imagen">
            <Imagen />
          </div>
          <div className="I-Tarjeta-Cuerpo">
            <div className="I-Titulo-producto">
              <div className="Titulo-precio-lista">
                <h4>$1990</h4>
              </div>
              <div className="Titulo-precio-lista">
                <img className="Icono-envio" src={EnvioIcono} alt=""></img>
              </div>
            </div>

            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            </h5>
          </div>

          <div className="I-Tarjeta-ciudad">
            <h5>Ciudad</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default TarjetaProducto;
