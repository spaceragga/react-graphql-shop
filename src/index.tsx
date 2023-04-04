import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import getApolloClient from "./api/gql/apolloClient";
import App from "./App";
import { CartContextProvider } from "./context/CartContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={getApolloClient}>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
