import React from "react";
import { Container, Row, Col } from 'reactstrap';

const TodoAppTitle = () => {
    return (
        <Container>
          <Row>
            <Col  md={{ offset: 4 }}>
            <h1>
              TODOS
            </h1>
            </Col>
          </Row>
        </Container>
    );
};

export default TodoAppTitle;
