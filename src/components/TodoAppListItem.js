import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const TodoAppListItem = ({ content, id, completed, toggleTodo }) => {
    return (
        <div
            style={{
                textDecoration: completed ? "line-through" : "initial",
            }}
            onClick={() => toggleTodo(id)}
        >
            {content}
        </div>
    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo,
};

export default connect(null, mapDispatchToProps)(TodoAppListItem);
