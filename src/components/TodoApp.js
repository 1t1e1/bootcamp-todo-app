import React from "react";
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TodoAppHeader />
                <TodoAppList />
            </div>
        );
    }
}

export default TodoApp;
