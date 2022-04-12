import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Recommends from './Components/Recommends';
import Context from './Context';



ReactDOM.render(
  <React.StrictMode>
   <Context>
      <App />
   </Context>
  </React.StrictMode>,
  document.getElementById('root')
);