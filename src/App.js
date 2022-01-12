import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {Container, Col, Row, Button} from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products  from "./Proucts";
import EventListener from "./EventListner";
import Home from "./Home";
import NoPage from "./NoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="Navigation">
        <Container >
          <Row >
            <Col sm='8'>
              <h1>Navigation</h1>
            </Col>
            <Col sm='1' className='justify-content-md-center' style={{backgroundColor:''}}>
              <Row >
              <Link to="/">
                <Button style={{margin:10}} variant="dark">Home</Button>
              </Link>
              </Row>
            </Col>
            <Col sm='1' style={{backgroundColor:''}}>
              <Row><Link to="/products/:id">
                <Button style={{margin:10}} variant="dark">API</Button>
              </Link>
              </Row>
            </Col>
            <Col sm='2' style={{backgroundColor:''}}>
              <Row><Link to="/event">
                <Button style={{margin:10}} variant="dark">Event Listners</Button>
              </Link>
              </Row>
            </Col>
          </Row>
        </Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/event" element={<EventListener />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
