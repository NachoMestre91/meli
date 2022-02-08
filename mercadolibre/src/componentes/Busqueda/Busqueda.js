import React from 'react';
import './Busqueda.css';
import Logo from '../../static/img/Logo_ML.png';

const Busqueda = () => {
  return (
    <div className="CP-Busqueda-contenedor">
      <img src={Logo} alt=""></img>

      <div className="CP-Buscar-Resultados">
        <div className="CP-Buscar">
          <input
            id="inputBuscar"
            autoComplete="off"
            className="CI-InputBucar-Activo"
            type="text"
            placeholder="Buscar"
            // onChange={e => escucharCambiosEntrante(e.target.value)}
            // value={filtrarDentro ? datosIngresados : valueInput}
          ></input>
          <button className="CI-boton-lupa"></button>
        </div>
        {/* {desplegarResultados ? (
          <ResultadoDesplegableBuscar
            itemSeleccionado={escucharSeleccionDeBusqueda}
            desplegar={setDesplegarCardResultados}
            desplegarOpcionesAvanzadas={desplegarBusquedaAvanzada}
            items={
              filtrarDentro
                ? datosIngresados.trim()
                  ? datosAMostrar
                  : []
                : valueInput.trim()
                ? datos
                : []
            }
          ></ResultadoDesplegableBuscar>
        ) : null}

        {isBuscarProyectos && desplegarAvanzadas ? (
          <div className="CP-Card-BusquedaAvanzada">
            {props.children}
            <div
              className="CP-Boton-Busqueda-Avanzada"
              onClick={() => escucharOpcionBuscarAvanzada()}
            >
              <hr></hr>
              <button className="CI-Boton-Busqueda-Avanzada">
                {' '}
                <b> Buscar</b>{' '}
              </button>
            </div>
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

export default Busqueda;
