import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteComponent from './components/RouteComponent';
import './index.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
