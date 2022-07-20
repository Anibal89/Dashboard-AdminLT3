import React, { Fragment, useEffect, useState } from "react";
import Tablas2 from "./Tablas"; 
import Form from './Form';

function Modulo3() {

  //hooks de estado del formulario

  const [tabla, setTabla] = useState({

    tipoMaterial: '',
    turno: '',
    fecha: '',
    supervisor: '',
    operador: '',
    peso: '',
    maquina: 0

})
// Hooks de actualizacion de la tabla 
  const [tabla2, setTablas] = useState([]); /// funcion que captura en formato array - json

  useEffect(() => {
    const getTablas = () => {
      fetch('http://localhost:80/api-swort/')
        .then(res => res.json())
        .then(data => setTablas(data));
    };
    getTablas();
  }, []);

  return (
    <Fragment>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Extrusion</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Inicio</a>
                  </li>
                  <li className="breadcrumb-item active">Menu</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Tabla de datos </h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <Tablas2 tabla2={tabla2} setTabla={setTabla} />
                    <button type="button" className="btn btn-success">
                      Descargar
                    </button>
                  </div>
                </div>
                {/* /.card */}
              
                {/* /.card */}
              </div>
              <div className="col-sm">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Formulario </h3>
                    </div>
                  </div>
                  <div className="card-body">
                  <Form tabla={tabla} setTabla={setTabla}/>
                  </div>
                </div>
                {/* /.card */}
              
                {/* /.card */}
              </div>
              {/* /.col-md-6 */}
              {/* /.col-md-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
      </div>
    </Fragment>
  );
}

export default Modulo3;
