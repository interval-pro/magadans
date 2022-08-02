import React from 'react';
import ReactDOM from 'react-dom/client';
import { LeftSideComponent } from './@main/left-side/left-side';
import { RightSideComponent } from './@main/right-side/right-side';
import './@style/index.scss';

import { LayoutComponent } from './@style/layout/layout';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LayoutComponent>
      <LeftSideComponent key='left-side' />
      <RightSideComponent key='right-side' />
    </LayoutComponent>
  </React.StrictMode>
);