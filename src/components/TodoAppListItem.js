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
                  width: "200px",
                  margin: "5px",
                  padding: "5px",
                  display: "inline",
                  textDecoration: completed ? "line-through" : "initial",
              }}
              // onClick={() => toggleTodo(id)}
          >
              {content}
          {/* </CardText>
          <CardText> */}
          <Button color="danger"
              style={{
                  // width: "40px",
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
