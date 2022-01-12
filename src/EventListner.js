import React from 'react'
import { Container, Row, Col,  Button } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EventListener() {
    const [count, setCount] = useState(0);
    const [altName, setAltName] = useState();
    let [red, setRed] = useState(10);
    let [green, setGreen] = useState(150);
    let [blue, setBlue] = useState(150);
    let flag = false;
    if(red>=250){red=0;}
    if(green>=250){green=0;}
    if(blue>=250){blue=0;}
    return (
      <div className="EventListner">
        <Container style={{ backgroundColor: flag ? 'white' : `rgb(${red},${green},${blue})`}}>
          <Row className='text-center'>
            <h1>Event listners</h1>
          </Row >
          <Row >
            <Col  className="SquareBorder">
              <Row className="text-center">
              <p>You clicked <h3>{count}</h3>  times</p>
              <Button variant="primary" onClick={() => setCount(count + 1)}>
                Click me
              </Button>
              </Row>
            </Col>
            <Col className="SquareBorder">
              <Row className="text-center">
                <p>Click to get a alert.</p>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    value={altName}
                    onChange={(e) => setAltName(e.target.value)}
                  />
                </Col>
                <Col >
                  <Button
                    variant="primary"
                    onClick={() => alert("Hi, " + altName)}
                  >
                    Alert me
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col className="SquareBorder justify-content-md-center" >
              <Row className="text-center">
              <p>Click to change background color.</p>
              </Row>
              <Row>
                <Col sm='3'>
              <Button
                variant="danger"
                value="red"
                onClick={(e) => setRed(red+25)}
              >
                Red
              </Button>
              </Col>
              <Col sm='3'>
              <Button
                variant="success"
                value="green"
                onClick={(e) => setGreen(green+25)}
              >
                Green
              </Button>
              </Col>
              <Col sm='3'>
              <Button
                variant="primary"
                value="blue"
                onClick={(e) => setBlue(blue+25)}
              >
                Blue
              </Button>
              </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  export default EventListener;