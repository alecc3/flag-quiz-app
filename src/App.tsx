import "./App.css";
import React, { useState, useEffect } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Container } from "react-bootstrap";
import Desktop from './components/Desktop'
import Mobile from './components/Mobile'
import "bootstrap/dist/css/bootstrap.min.css";

const countryAPI = require("./config.json").api;

const client = new ApolloClient({
  uri: countryAPI,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Container className="container">
          {
          window.innerWidth > 700 ?
          Desktop
          :
          Mobile
          }
        </Container>
      </div>
    </ApolloProvider>
  );
}

export default App;
