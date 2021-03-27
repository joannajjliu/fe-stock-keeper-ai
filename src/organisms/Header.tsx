import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Header: React.FC = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        StockKeeper.ai
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/hospital">
              Hospital
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/hospital-room">
              Room
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default Header;
