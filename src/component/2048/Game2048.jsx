import cloneDeep from "lodash.clonedeep";
import React, { useState } from "react";
import { BlockComponent, Container } from "./style";

const Game2048 = () => {
  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  // Iniitialize
  const initialize = () => {
    let newGrid = cloneDeep(data);
    console.log(newGrid);
    addNumber(newGrid);
    console.table(newGrid);
    addNumber(newGrid);
    console.table(newGrid);
    setData(newGrid);
  };

  // Addnumber - Add an item
  const addNumber = () => {
    let added = false;
    let gridFull = false;
    let attempts = 0;
    while (!added) {
      if (gridFull) {
        break;
      }

      let rand1 = Math.floor(Math.random() * 4);
      let rand2 = Math.floor(Math.random() * 4);
      attempts++;
      if (newGrid[rand1][rand2] === 0) {
        newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
        added = true;
      }
    }
  };
  // Swipe - Right, Left, Up, Down

  // Check Gameover

  // Reset

  return (
    <Container>
      {data.map((row, oneIndex) => {
        return (
          <div style={{ display: "flex" }} key={oneIndex}>
            {row.map((digit, index) => (
              <Block num={digit} key={index} />
            ))}
          </div>
        );
      })}
    </Container>
  );
};

const Block = ({ num }) => {
  return <BlockComponent>{num !== 0 ? num : ""}</BlockComponent>;
};

export default Game2048;
