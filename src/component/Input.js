/*---------------------------
          Imports
---------------------------*/
/*      Libraries
---------------------------*/
import React from "react";
import styled from "styled-components";

/*      Components
---------------------------*/
import Counter from "./Counter";

/*    Style Component
---------------------------*/
import { flexbox } from "../styles/mixing";
// import { border } from "../styles/mixing";
import { TitleType2 } from "./../styles/text";
import { TextType1 } from "./../styles/text";

export default props => {
  return (
    <Input>
      <Container>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </Container>
      <Counter />
    </Input>
  );
};

const Input = styled.div`
  width: 100%;
  height: 70px;
  padding: 0.5rem;
  ${flexbox}
  justify-content: space-between;
  box-sizing: border-box;
`;

const Container = styled.div`
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

const Title = styled(TitleType2)`
  line-height: 0.5;
`;

const Text = styled(TextType1)`
  line-height: 0.5;
`;
