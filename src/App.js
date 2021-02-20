import "./App.css";
import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Container, Row, Col } from "react-bootstrap";
import Flags from "./components/index";
import "bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
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
                <h2>Alec's Flag Quiz 🤓</h2>
                <Flags />
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
