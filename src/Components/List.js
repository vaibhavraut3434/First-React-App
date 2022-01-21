import React from "react";
import Person from "../db.json";
import { Container, Col, Row, Table } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";

function List(props)  {
    // const data = "This is from child";
    const { object } = useParams();

  
    return (
      <section style={{backgroundColor:""}}>
        <div>
          <Container>
            <Row>
              <Col md="4">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Person.map((xx) => {
                      return (
                        <tr key={xx.id}>
                          <td>{xx.id}</td>
                          <td>{xx.firstName}</td>
                          <td>
                              <Link to={`/list/${xx.id}`} onClick={() => props.childToParent(Object.values(xx))} >Go</Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col>
             
              <Row  className="justify-content-md-center"><Outlet /></Row>
              
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  
}

export default List;
