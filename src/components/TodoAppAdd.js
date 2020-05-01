import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class TodoAppAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={(e) => {
                        /// formun default davranisi olan sayfa yenileme ve post etmeyi engelliyorum
                        e.preventDefault();
                        // statete tuttugum inputu son degerini aliyorum
                        const newContent = this.state.value;
                        this.props.addTodo(newContent);
                    }}
                >
                    <input
                        type="text"
                        placeholder="Todo Giriniz"
                        value={this.state.value}
                        onChange={(e) => {
                            this.setState({
                                value: e.target.value,
                            });
                        }}
                    />
                    <button type="submit">Todo Ekle</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addTodo: addTodo,
};

export default connect(null, mapDispatchToProps)(TodoAppAdd);
