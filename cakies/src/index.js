import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import DataContextProvider from './context/DataContextProvider';

ReactDOM.render(
  
    <DataContextProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </DataContextProvider>
  ,
  document.getElementById('root')
);
