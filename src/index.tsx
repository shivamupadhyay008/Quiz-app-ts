import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ChakraProvider} from "@chakra-ui/react";
import App from './App';
import { AppContextProvider } from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
