import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Header: React.FC = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5">
    <div className="container-fluid">
      <a className="navbar-brand">StockKeeper.ai</a>
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
            <Link className="nav-link active" aria-current="page" to="/fe-stock-keeper-ai/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/fe-stock-keeper-ai/hospital">
              Hospital
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/fe-stock-keeper-ai/hospital-room">
              Room
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
