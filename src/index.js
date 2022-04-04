import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { ProductState } from './state/productState';
import reportWebVitals from './reportWebVitals';

const productState = new ProductState()

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <App productState={productState}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
