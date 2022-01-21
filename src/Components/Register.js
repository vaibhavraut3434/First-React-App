import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { register } from "../Auth";

const Register = (props) => {
  const initialFieldValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    city: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if(name==="email" )
    {
      setForm({
        ...form,[name]:value,
      });
    }
    if(name==="password" )
    {
      setForm({
        ...form,[name]:value,
      });
    }
    
  };

  let navigate = useNavigate();
  const  handleFormSubmit = async(e) => {
    e.preventDefault();
    props.add(values);
    await register(form);
    console.log(form);
     navigate('/');
  };

  return (
    <div>
      <Col style={{ backgroundColor: "" }}>
        <Row className="justify-content-md-center">
          <Card border="primary" style={{ width: "25rem" }}>
            <Card.Body>
              <Form autoComplete="off" onSubmit={handleFormSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your first name..."
                    value={values.firstName}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your last name.."
                    value={values.lastName}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      name="city"
                      id="city"
                      value={values.city}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  {/* <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group> */}
                </Row>

                <Button value="save" variant="primary" type="submit">
                  Submit
                </Button>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Label> {""}</Form.Label>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </div>
  );
};

export default Register;
