import React from "react";
import TodoAppTitle from "./TodoAppTitle";
import TodoAppAdd from "./TodoAppAdd";
import {  CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const TodoAppHeader = (props) => {
    return (
        <div>
          <CardBody>

            <CardTitle>
              <TodoAppTitle />
            </CardTitle>

            <CardSubtitle> 
              <TodoAppAdd />
            </CardSubtitle>

          </CardBody>
        </div>
    );
};

export default TodoAppHeader;
