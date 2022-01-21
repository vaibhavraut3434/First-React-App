import { Container, Col, Row, } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import db from "./firebase";

function Home(props) {
  const add = (obj) => {
    //  firebaseDb.child("user_Registration").push(obj, (err) => {
    //    if (err) console.log(err);
    //  });
    db.ref(`user_Registration`).push(obj).catch(alert);
    alert("Form Submitted Successfully");
  };

  return (
    <>
    <h1>{''}</h1>
      <Container>
        <Row>
          <Col sm="2" md="6">
            <Register add={add} />
          </Col>
          <Col sm="2" md="6">
            <Login />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
