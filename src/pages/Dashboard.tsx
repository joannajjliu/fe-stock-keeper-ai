import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.scss';

const Dashboard: React.FC = () => (
  <>
    <div className="ajumbotron jumbotron-fluid stock-keeper-dashboard__inventory-jumbotron">
      <div className="container stock-keeper-dashboard__inventory-container">
        <h1 className="display-4 stock-keeper-dashboard__inventory-container--header">
          <Link to="/hospital">Inventory</Link>
        </h1>
      </div>
    </div>
    <div className="mt-3"></div>
    <div className="jumbotron jumbotron-fluid stock-keeper-dashboard__settings-jumbotron">
      <div className="container stock-keeper-dashboard__settings-container">
        <h1 className="display-4 stock-keeper-dashboard__settings-container--header">
          <Link to="/settings">Settings</Link>
        </h1>
      </div>
    </div>
  </>
);

export default Dashboard;
