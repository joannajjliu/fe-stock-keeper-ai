import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" aria-current="page" to="/fe-stock-keeper-ai/">
          StockKeeper.ai
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/fe-stock-keeper-ai/hospital">
                <i className="bi bi-building icon" data-toggle="tooltip" title="inventory" id="inventory"></i>
                {' Inventory'}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/fe-stock-keeper-ai/hospital-room">
                <i className="bi bi-card-text" data-toggle="tooltip" title="room view" id="room-view"></i>
                {' Room'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
