//import React, { useState } from "react";
import React from "react";
import styled from "styled-components";
import { flexbox } from "../styles/mixing";
import { border } from "../styles/mixing";
import { buttonTitle } from "../styles/mixing";
import { button } from "../styles/mixing";
import { colorPallet } from "../styles/setup";
// import { titlesSize } from "../styles/setup";

export default props => {
  return (
    <Button>
      <Title>{props.title}</Title>
    </Button>
  );
};

const Button = styled.div`
  ${border}
  border: 0;
  ${button}
  ${flexbox}
`;

const Title = styled.h1`
  ${buttonTitle};
  color: white;
`;
