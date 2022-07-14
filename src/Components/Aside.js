import React from "react";
import IconoUser from "../Img/user2-160x160.jpg";
import { NavLink } from "react-router-dom";
import Logounisa from '../Img/logounisa.png';

function Aside() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a className="brand-link">
        <img
          src={Logounisa}
          alt="AdminLTE Logo"
          className="brand-image"
        />
        <span className="font-weight-light">Software</span>
     </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={IconoUser}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Usuario beta
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <NavLink to="/" className ="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/modulo1" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Modulo 1</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/modulo2" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>Modulo 2</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-table" />
                <p>
                  Modulo Tablas
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
            </li>
            <li className="nav-header">Paginas</li>
            <li className="nav-item">
              <a href="pages/calendar.html" className="nav-link">
                <i className="nav-icon far fa-calendar-alt" />
                <p>Modulo 1</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/gallery.html" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>Modulo 2</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/kanban.html" className="nav-link">
                <i className="nav-icon fas fa-columns" />
                <p>Modulo 3</p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

export default Aside;
