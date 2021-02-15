import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";

const app = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)


const rootElement = document.getElementById('root');

if(rootElement.hasChildNodes()){
  ReactDOM.hydrate(app, rootElement)
}else { 
  ReactDOM.render(app, rootElement)
}

