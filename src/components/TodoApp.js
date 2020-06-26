import React from "react";
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";
import { Card , Col , Row} from 'reactstrap';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div style={{
            marginTop:"30px",
          }}>
            <Row>
              <Col xs={{ size: 6, offset: 3 }}>
                  <Card  >
                    <TodoAppHeader />
                    <TodoAppList />
                  </Card>
                </Col>
              </Row>
            </div>
        );
    }
}

export default TodoApp;
