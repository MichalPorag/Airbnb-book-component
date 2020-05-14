/*---------------------------
          Imports
---------------------------*/
/*      Libraries
---------------------------*/
//import React, { useState } from "react";
import React from "react";
import styled from "styled-components";

/*      Components
---------------------------*/
import Form from "./Form";
import Form2Container from "./Form2Container";
import ButtonContainer from "./ButtonContainer";
import DropdownMenu from "./DropdownMenu";

/*    Style Component
---------------------------*/
import { flexbox } from "../styles/mixing";
import { border } from "../styles/mixing";
import { backgroundImage } from "../styles/mixing";
import { colorPallet } from "../styles/setup";
import { titlesSize } from "../styles/setup";

export default () => {
  return (
    <Wrapper>
      <CardConatiner>
        <Title>Book unique places to stay and things to do.</Title>
        <Form title="WHERE" id="Anywhere" placeholder="Anywhere" />
        <Form2Container />
        <DropdownMenu title="GUESTS" id="Guests" placeholder="Guests" />
        <ButtonContainer />
      </CardConatiner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  ${flexbox}
  background-image: url("http://placekitten.com/1000")
  /* ${backgroundImage} why this is not working? */
`;

const CardConatiner = styled.div`
  width: 440px;
  height: 480px;
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${colorPallet.cardBcakgroundColor};
  ${flexbox}
  flex-direction: column;
  justify-content: space-evenly;
  ${border}
`;

export const Title = styled.h1`
  font-size: ${titlesSize.title1};
  color: ${colorPallet.titleColor};
`;
