import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from 'pages/HomePage';
import PrivateRoutes from 'routes/PrivateRoutes';
import PublicRoutes from 'routes/PublicRoutes';

function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <PublicRoutes />
      {/* <PrivateRoutes /> */}
    </Suspense>
  );
}

export default App;
