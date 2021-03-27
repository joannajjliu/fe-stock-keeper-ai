import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import DefaultHeader from './templates/DefaultHeader';
import Dashboard from './pages/Dashboard';
import HospitalRoomTable from './pages/HospitalRoomTable';
import HospitalTable from './pages/HospitalTable';
import StickyFooter from './templates/StickyFooter';
import './styles/global.scss';

const baseLink = '/fe-stock-keeper-ai';

const App = () => (
  <Router>
    <body className="d-flex flex-column h-100 stock-keeper-global__body">
      <DefaultHeader />
      <main className="mb-4">
        <section className="py-5 mt-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <Switch>
                <Route exact path={'/'}>
                  <Dashboard />
                </Route>
                <Route path={'/hospital'}>
                  <HospitalTable />
                </Route>
                <Route path={'/hospital-room'}>
                  <HospitalRoomTable />
                </Route>
              </Switch>
            </div>
          </div>
        </section>
      </main>
      <StickyFooter />
    </body>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
