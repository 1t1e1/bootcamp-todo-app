import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";

const TodoAppListItem = ({
    content,
    id,
    completed,
    toggleTodo,
    deleteTodo,
}) => {
    return (
        <div
            style={{
                width: "250px",
            }}
        >
            <div
                style={{
                    display: "inline",
                    textDecoration: completed ? "line-through" : "initial",
                }}
                onClick={() => toggleTodo(id)}
            >
                {content}
            </div>
            <div
                style={{
                    display: "inline",
                    float: "right",
                }}
                onClick={() => {
                    console.log(id);
                    deleteTodo(id);
                }}
            >
                del
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo,
};

export default connect(null, mapDispatchToProps)(TodoAppListItem);
