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
                margin: "20px 0",
            }}
        >
            <div
                style={{
                    width: "190px",
                    margin: "10px",
                    display: "inline",
                    textDecoration: completed ? "line-through" : "initial",
                }}
                onClick={() => toggleTodo(id)}
            >
                {content}
            </div>
            <button
                style={{
                    width: "30px",
                    float: "right",
                }}
                onClick={() => {
                    deleteTodo(id);
                }}
            >
                del
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo,
};

export default connect(null, mapDispatchToProps)(TodoAppListItem);
