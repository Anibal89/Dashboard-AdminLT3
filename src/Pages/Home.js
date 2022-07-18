import React, { Fragment } from "react";
import bolsag from "../Img/bolsag.png"
import Oferta from "../Img/oferta.jpg"
import Piwi from "../Img/piwis.jpg";


function Home() {
  return (
    <Fragment>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
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
        {/* /.content-header */}
        {/* Main content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="card" style={{ with: "10px" }}>
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Bolsa </h3>
                    </div>
                  </div>
                  <img 
                    className="card-img-top"
                    src={bolsag}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-text">Descripcion</p>
                    <button type="button" className="btn btn-success">
                      Descargar
                    </button>
                  </div>
                </div>
                {/* /.card */}
                <div className="card justify-content-center">
                  <div className="card-header border-0">
                    <h3 className="card-title">Bolsa 2</h3>
                  </div>
                  <img
                    className="card-img-top img-responsive"
                    src={Oferta}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-text">Descripcion</p>
                    <button type="button" className="btn btn-success">
                      Descargar
                    </button>
                  </div>
                </div>
                {/* /.card */}
              </div>
              {/* /.col-md-6 */}
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Bolsa 3</h3>
                    </div>
                  </div>
                  <img
                    className="card-img-top"
                    src={Piwi}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-text">
                    Descripcion
                    </p>
                    <button type="button" className="btn btn-success">
                      Descargar
                    </button>
                  </div>
                </div>
                {/* /.card */}
                <div className="card">
                {<div className="d-flex justify-content-between"  style={{width: '100%'}}>
                </div>}
                 <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Bolsa 3</h3>
                    </div>
                  </div>
                  <img
                    className="card-img-top"
                    src={Piwi}
                    alt="Card image cap"
                  />
                <div className="card-body">
                    <p className="card-text">
                    Descripcion
                    </p>
                    <button type="button" className="btn btn-success">
                      Descargar
                    </button>
                  </div>
               </div>
                  </div>
              {/* /.col-md-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content */}
      </div>
    </Fragment>
  );
}

export default Home;
