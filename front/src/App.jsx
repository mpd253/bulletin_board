import React from 'react';
import ReactDOM from 'react-dom/client';

import MainLayout from '@layouts/MainLayout';

import '@styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>,
);
