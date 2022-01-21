import React, { Component, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../Auth";

const Login = () => {

    let navigate = useNavigate();

    const [form, setForm] = useState({
      email:'',password:''
    })

    const handleFormSubmit = async(e) => {
      e.preventDefault();
      // console.log(form);
      await login(form);
      alert("Login Successfull.");
      navigate('/list');
    }

    return (
      <div>
        <Col style={{ backgroundColor: "" }}>
          <Row className="justify-content-md-center">
            <Card border="success" style={{ width: "25rem" }}>
              <Card.Body>
                <Form action="/list" autoComplete="off" onSubmit={handleFormSubmit} >
                  <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" id="email"  type="email" placeholder="Enter email" 
                    onChange={(e) => {setForm({...form,email:e.target.value})}}/>
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" id="password" type="password" placeholder="Password" 
                    onChange={(e) => {setForm({...form,password:e.target.value})}}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </div>
    );
}

export default Login;
