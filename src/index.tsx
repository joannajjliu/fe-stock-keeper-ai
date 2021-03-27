import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import DefaultHeader from './templates/DefaultHeader';
import HospitalRoom from './pages/HospitalRoom';
import Hospital from './pages/Hospital';
import PageNotFound from './pages/PageNotFound';
import Settings from './pages/Settings';
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
                <Route exact path={'/hospital'}>
                  <Hospital />
                </Route>
                <Route path={'/hospital-room'}>
                  <HospitalRoom />
                </Route>
                <Route exact path={'/settings'}>
                  <Settings />
                </Route>
                <Route path={'/'}>
                  <PageNotFound />
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
