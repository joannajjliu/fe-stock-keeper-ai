import React from 'react';
import ReactDOM from 'react-dom';

import HospitalTable from './pages/HospitalTable';
import HospitalRoomTable from './pages/HospitalRoomTable';
import DefaultHeader from './templates/DefaultHeader';
import StickyFooter from './templates/StickyFooter';

const App = () => (
  <body className="d-flex flex-column h-100">
    <DefaultHeader />
    <main>
      <section className="py-5 mt-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <HospitalTable />
            <HospitalRoomTable />
          </div>
        </div>
      </section>
    </main>
    <StickyFooter />
  </body>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
