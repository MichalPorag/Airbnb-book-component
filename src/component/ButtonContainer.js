//import React, { useState } from "react";
import React from "react";
import styled from "styled-components";
import { flexbox } from "../styles/mixing";
import { border } from "../styles/mixing";
import Button from "./Button";

// import { colorPallet } from "../styles/setup";
// import { titlesSize } from "../styles/setup";

export default props => {
  return (
    <ButtonContainer>
      <Button title="Search" />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  width: 100%;
  height: 70px;
  ${flexbox}
  justify-content: flex-end;
  border-color: red;
`;
