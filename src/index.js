import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./main";


ReactDOM.render(
  <BrowserRouter> 
  <Main />
   </BrowserRouter>, 
  document.getElementById('root')
);

