import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

{
  /*
function Navigation(props) {
  return (
    <div className="Navigation">
      <div>
        <h1>Navigation</h1>
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Button variant="primary">Home</Button>{" "}
        <Button variant="primary">API</Button>{" "}
        <Button variant="primary">Event Listners</Button>{" "}
      </div>
    </div>
  );
}
*/
}
function Home(props) {
  const [name, steName] = useState("");
  const [gender, ste0Name] = useState("");
  const [mob, ste1Name] = useState("");
  const [address, ste2Name] = useState("");

  const handleSubmit = (event) => {
    ReactDOM.render(name, document.getElementById("idName"));
    ReactDOM.render(gender, document.getElementById("idGender"));
    ReactDOM.render(mob, document.getElementById("idMobile"));
    ReactDOM.render(address, document.getElementById("idAddress"));
    event.preventDefault();
  };

  return (
    <div className="Home">
      <Container fluid="md">
        <Row>
          <Col md="6">
            <h3>Enter Details</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => steName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Check
                  type="radio"
                  label="Male"
                  value="Male"
                  onClick={(e) => ste0Name(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  value="Female"
                  onClick={(e) => ste0Name(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="tel"
                  placeholder="Mobile no."
                  value={mob}
                  onChange={(e) => ste1Name(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => ste2Name(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md="6">
            <Row className="justify-content-md-center">
              <Row>
                <h1>Details</h1>
              </Row>
              <h2>
                <Row className="justify-content-md-center" id="idName">
                  Name
                </Row>
              </h2>
              <h4>
                <Row className="justify-content-md-center" id="idGender">
                  Gender
                </Row>
              </h4>
              <h4>
                <Row className="justify-content-md-center" id="idMobile">
                  Mobile
                </Row>
              </h4>
              <h6>
                <Row className="justify-content-md-center" id="idAddress">
                  Address
                </Row>
              </h6>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Api(props) {
  return (
    <div className="Api">
      <h1>API</h1>
    </div>
  );
}

function EventListener() {
  const [count, setCount] = useState(0);
  const [altName, setAltName] = useState();
  return (
    <div className="EventListner">
      <Container>
        <Row>
          <h1>Event listners</h1>
        </Row>
        <Row>
          <Col>
            <p>You clicked {count} times</p>
            <Button variant="primary" onClick={() => setCount(count + 1)}>
              Click me
            </Button>
          </Col>
          <Col>
            <p>Click to get a alert.</p>
            <input
              type="text"
              value={altName}
              onChange={(e) => setAltName(e.target.value)}
            />
            <Button variant="primary" onClick={() => alert("Hi, " + altName)}>
              Alert me
            </Button>
          </Col>
          <Col>3</Col>
        </Row>
      </Container>
    </div>
  );
}

const NoPage = () => {
  return <h1>Page not found.</h1>;
};
function App() {
  return (
    <BrowserRouter>
      <div className="Navigation">
        <Container>
          <Row>
            <Col>
              <h1>Navigation</h1>
            </Col>
            <Col >
              <Link to="/">
                <Button variant="primary">Home</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/api">
                <Button variant="primary">API</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/event">
                <Button variant="primary">Event Listners</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<Api />} />
          <Route path="/event" element={<EventListener />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
