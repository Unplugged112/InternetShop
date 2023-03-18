import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
// import { createStore } from '@reduxjs/toolkit';
// import { cartActions } from "./redux/slice";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(cartActions);
root.render(

    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>

);


