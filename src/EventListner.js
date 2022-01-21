import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EventListener() {
  const [count, setCount] = useState(0);
  const [altName, setAltName] = useState();
  let [red, setRed] = useState(10);
  let [green, setGreen] = useState(150);
  let [blue, setBlue] = useState(150);
  let flag = false;
  if (red >= 250) {
    red = 0;
  }
  if (green >= 250) {
    green = 0;
  }
  if (blue >= 250) {
    blue = 0;
  }
  return (
    <div className="EventListner">
      <Container>
        <Row className="text-center">
          <h1>Event listners</h1>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="4" sm='2'>
            <Row className="text-center">
              <Card bg="warning" text="">
                <Card.Body>
                  <Card.Text>
                    <Row className="justify-content-md-center">
                      You clicked <h1>{count}</h1> times
                    </Row>
                    <Row>
                      <Button
                        variant="primary"
                        onClick={() => setCount(count + 1)}
                      >
                        Click me
                      </Button>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row>.</Row>
            <Row className="text-center">
              <Card bg="" text="dark">
                <Card.Body>
                  <Card.Title> Click to get a alert. </Card.Title>
                  <Card.Text>
                    <Row>
                      <input
                        type="text"
                        value={altName}
                        onChange={(e) => setAltName(e.target.value)}
                      />
                    </Row>
                    <Row>  .</Row>
                    <Row>
                      <Button
                        variant="primary"
                        onClick={() => alert("Hi, " + altName)}
                      >
                        Alert me
                      </Button>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
    <Row>.</Row>
    <Row className="justify-content-md-center">
            <Col
              style={{
                backgroundColor: flag
                  ? "white"
                  : `rgb(${red},${green},${blue})`,
              }}
              className="SquareBorder "
            >
              <Row className="text-center">
                <p>Click to change background color.</p>
              </Row>
              <Row>
                <Col sm="3">
                  <Button
                    variant="danger"
                    value="red"
                    onClick={(e) => setRed(red + 25)}
                  >
                    Red
                  </Button>
                </Col>
                <Col sm="3">
                  <Button
                    variant="success"
                    value="green"
                    onClick={(e) => setGreen(green + 25)}
                  >
                    Green
                  </Button>
                </Col>
                <Col sm="3">
                  <Button
                    variant="primary"
                    value="blue"
                    onClick={(e) => setBlue(blue + 25)}
                  >
                    Blue
                  </Button>
                </Col>
              </Row>
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EventListener;
