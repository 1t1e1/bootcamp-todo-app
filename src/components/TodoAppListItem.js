import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";
import { CardSubtitle, Button, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoAppListItem = ({
    content,
    id,
    completed,
    toggleTodo,
    deleteTodo,
}) => {
    return (
        <CardSubtitle style={{ margin: "20px" }}
              onClick={() => toggleTodo(id)}
        >
          <CardText
              style={{
                  margin: "5px",
                  padding: "5px",
                  textDecoration: completed ? "line-through" : "initial",
              }}
          >
          <div
            style={{
              display: "inline-block",
              lineHeight: "22px"
            }}
          >

              {content}
            </div>
          {/* </CardText>
          <CardText> */}
          <Button color="danger"
              style={{
                  float: "right",
              }}
              onClick={() => {
                  deleteTodo(id);
              }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          </CardText>
        </CardSubtitle>
    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo,
};

export default connect(null, mapDispatchToProps)(TodoAppListItem);
