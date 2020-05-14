/*---------------------------
          Imports
---------------------------*/
/*      Libraries
---------------------------*/
import React from "react";
import styled from "styled-components";

/*      Components
---------------------------*/

/*    Style Component
---------------------------*/
import { flexbox } from "../styles/mixing";
import { border } from "../styles/mixing";

export default props => {
  return (
    <Form>
      <Lable>{props.title}</Lable>
      <Input type="text" id={props.id} placeholder={props.placeholder} />
    </Form>
  );
};

const Form = styled.div`
  width: 100%;
  height: 80px;
  ${flexbox}
  flex-direction: column;
`;

const Lable = styled.label`
  width: 100%;
  margin-bottom: 2.5px;
  font-family: Arial;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  ${border}
  padding: 1rem;
  box-sizing: border-box;
`;
