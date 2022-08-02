import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterWrapper } from './@core/routes/routes';
import './@style/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterWrapper />
  </React.StrictMode>
);