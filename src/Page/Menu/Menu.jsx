import React from "react";
import { Container, Button, Title } from "./style";
import { useHistory } from "react-router";
const Menu = () => {
  const history = useHistory();
  const Push = (to) => {
    // history.push(to);
  };
  return (
    <Container>
      <Title>Menu</Title>
      <Button onClick={Push("/snake")}>Snake</Button>
      <Button onClick={Push("/2048")}>2048</Button>
    </Container>
  );
};

export default Menu;
