import React, { Component } from "react";
import styled from "styled-components";

class Cell extends Component {
  state = {
    active: false
  };
  render() {
    return <CellDisplay />;
  }
}

export default Cell;

const CellDisplay = styled.div`
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: lavender;
  border: 0.5px solid black;
`;
