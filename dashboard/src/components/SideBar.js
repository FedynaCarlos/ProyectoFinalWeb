import React from 'react';
import image from '../assets/images/logo.png';
import { Route, Link, Routes } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import CepasInDb from './CepasInDb';
import ProductoInDb from "./ProductoInDb";
import ContentRowMovies from './ContentRowMovies';
import Error404 from './Error404';
import Producto from './Producto';
import SearchMovies from "./SearchMovies";
import Thanks from "./Thanks";

function SideBar(){
    return (
      <React.Fragment>
        {/*<!-- Sidebar -->*/}
        <ul
          className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
          id="accordionSidebar"
          style={{ background: "#604621" }}
        >
          {/*<!-- Sidebar - Brand -->*/}
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            style={{ height: 150 }}
            to="/"
          >
            <div className="sidebar-brand-icon">
              <img
                className="w-100a"
                style={{ width: 8 + "rem", borderRadius: 80 }}
                src={image}
                //width="60"
                alt="Bodega Grupo 5"
              />
            </div>
          </Link>

          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider my-0" />

          {/*<!-- Nav Item - Dashboard -->*/}
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard - Bodega Grupo 5</span>
            </Link>
          </li>

          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider" />

          {/*<!-- Heading -->*/}
          <div className="sidebar-heading">Actions</div>

          {/*<!-- Nav Item - Pages -->*/}
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/CepasInDb">
              <i className="fas fa-fw fa-folder"></i>
              <span>Cepas</span>
            </Link>
          </li>

          {/*<!-- Nav Item - Charts -->*/}
          <li className="nav-item">
            <Link className="nav-link" to="/ProductoInDb">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Producto estrella</span>
            </Link>
          </li>

          {/*<!-- Nav Item - Tables -->*/}
          <li className="nav-item">
            <Link className="nav-link" to="/ContentRowMovies">
              <i className="fas fa-fw fa-table"></i>
              <span>Resumen</span>
            </Link>
          </li>

          {/* tabla */}
          <li className="nav-item">
            <Link className="nav-link" to="/table">
              <i className="fas fa-fw fa-film"></i>
              <span>Tabla de productos</span>
            </Link>
          </li>

          {/*<!-- Buscador -->*/}
          <li className="nav-item nav-link">
            <Link className="nav-link" to="/SearchMovies">
              <i className="fas fa-search"></i>
              <span>Buscar un cóctel</span>
            </Link>
          </li>

          

          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        {/*<!-- End of Sidebar -->*/}

        <Routes>
          <Route exat path="/" element={<ContentWrapper />} />
          <Route path="/CepasInDb" element={<CepasInDb />} />
          <Route path="/ProductoInDb" element={<ProductoInDb />} />
          <Route path="/ContentRowMovies" element={<ContentRowMovies />} />
          <Route path="/table" element={<Producto />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/SearchMovies" element={<SearchMovies />} />
          <Route path="/Thanks" element={<Thanks />} />
        </Routes>
      </React.Fragment>
    );
}
export default SideBar;