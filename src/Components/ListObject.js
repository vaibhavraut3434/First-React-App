import React from "react";
import { Card, ListGroup } from "react-bootstrap";

class ListObject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            
            {this.props.val.map((el) => {
              return (
              <ListGroup.Item key={el} >{el}</ListGroup.Item>
              );
            })}

            {/* <ListGroup.Item>{this.props.val[0]}</ListGroup.Item>
            <ListGroup.Item>{this.props.val[1]}</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
          </ListGroup>
        </Card>
      </>
    );
  }
}

export default ListObject;
