import React from "react";
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  //const { id } = useParams()
  const [id, setId] = useState(1);
  
  const url = `https://61de7e72ab592500178c71bd.mockapi.io/api/v1/products/${id}`;
  const [product, setProduct] = useState(null);
  let content = null;
  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  if (product) {
    return (content = (
        <div style={{backgroundColor:'white'}}>
      <Container >
        <Row className="justify-content-md-center">
          <Card style={{ width: "18rem", margin:10 }}>
            <Card.Img variant="top" style={{width:'', height:''}} src={product.image} />
            <Card.Body>
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text>
                
                {product.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>${product.price}</ListGroupItem>
              <ListGroupItem>{product.vehicle}</ListGroupItem>
              <ListGroupItem>{product.createdAt}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              {/*<Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#" >Another Link</Card.Link>
    */}
              <Row>
              <Col sm='6'><Button variant="primary" onClick={() => setId(id-1)} >Previous</Button></Col>
              <Col sm='6'><Button variant="primary" onClick={() => setId(id+1)} >Next</Button></Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      </div>
    ));
  }
  return <div>{content}</div>;
}

export default Products;
