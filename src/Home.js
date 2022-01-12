import {Container, Col, Row, Button, Form} from "react-bootstrap";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="Home" >
        <Container fluid="md" >
          <Row>
            <Col md="6" id="InputCard">
              <h3><Row  className="justify-content-md-center" >Enter Details</Row></h3>
              <Row>
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
  
                <Row><Button style={{width:'50%',position:"relative",margin:0,left:'20%'}} variant="primary" type="submit">
                  Submit
                </Button></Row>
              </Form>
              </Row>
            </Col>
            <Col md="6" id="DetailsCard" >
              {/*<Col style={{backgroundColor:"red"}}>*/}
                <h1>
                <Row className="justify-content-md-center" style={{backgroundColor:""}}>
                  Details
                </Row>
                </h1>
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
              {/*</Col>*/}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  export default Home;