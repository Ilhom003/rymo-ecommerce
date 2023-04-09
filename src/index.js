import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import { BrowserRouter } from 'react-router-dom'
import ProductsContextProvider from './context/ProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <Root />
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

