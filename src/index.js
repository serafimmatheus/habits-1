<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { Providers } from "./Context/index";
>>>>>>> origin

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
