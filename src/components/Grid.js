/*
  Grid component by Rane Wallin
  Holds all of the cells for the simulation. Assumes smallest likely screen size of 320px
 */
import React from "react";
import styled from "styled-components";

import Cell from "./Cell";

const cellSize = 10;
const gridDimension = 300;

const Grid = _ => {
  return <GridWrapper>{getCells()}</GridWrapper>;
};

const getCells = _ => {
  const totalCells = (gridDimension / cellSize) ** 2;
  const cells = [];

  for (let i = 0; i < totalCells; i++) {
    cells.push(<Cell id={i} key={i} />);
  }

  return cells;
};

export default Grid;

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${gridDimension}px;
  height: ${gridDimension}px;
  box-sizing: content-box;
  border: 1px solid black;
  margin: 25px auto;
  background-color: darkgray;
`;
