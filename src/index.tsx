import React from 'react';
import ReactDOM from 'react-dom';

import DefaultHeader from './templates/DefaultHeader';
import StickyFooter from './templates/StickyFooter';

const unused = 'something';
const App = () => (
  <body className="d-flex flex-column h-100">
    <DefaultHeader />
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="mt-5">Sticky footer with fixed navbar</h1>
        <p className="lead">
          Pin a footer to the bottom of the viewport in desktop browsers with
          this custom HTML and CSS. A fixed navbar has been added with{' '}
          <code className="small">padding-top: 60px;</code> on the{' '}
          <code className="small">main &gt; .container</code>.
        </p>
        <p>
          Back to{' '}
          <a href="/docs/5.0/examples/sticky-footer/">
            the default sticky footer
          </a>{' '}
          minus the navbar.
        </p>
      </div>
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
