import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactGA.initialize('G-SGE8J7VF5N', {
  gaOptions: {
    sampleRate: 100,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
