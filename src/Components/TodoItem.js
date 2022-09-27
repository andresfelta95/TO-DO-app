import React from "react";
import styled from "styled-components";

function TodoItem(props) {
  return (
    <li>
        <span>C</span>

        <p>{props.text}</p>

        <span>X</span>
      </li>
  );
}

export { TodoItem };

//styled-components
