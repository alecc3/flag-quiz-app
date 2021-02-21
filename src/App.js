import "./App.css";
import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Container, Row, Col } from "react-bootstrap";
import QuizContainer from "./components/QuizContainer";
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
          <Row>
            <Col></Col>
            <Col>
              <div id="box">
                <QuizContainer />
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </ApolloProvider>
  );
}

export default App;
