/*---------------------------
          Imports
---------------------------*/
/*      Libraries
---------------------------*/
import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
// import { darken } from 'polished'

/*      Components
---------------------------*/
import Input from "./Input";

/*    Style Component
---------------------------*/
import { flexbox } from "../styles/mixing";
import { border } from "../styles/mixing";
import { TitleType2 } from "./../styles/text";
import { colorPallet } from "../styles/setup";

export default props => {
  const [close, setOpen] = useState(false);

  return (
    <DropdownMenu>
      <Lable>{props.title}</Lable>
      <DropdownButton
        type="text"
        id={props.id}
        placeholder={props.placeholder}
        onClick={() => setOpen(!close)}
      >
        {props.title}
        <Arrow close={close} />
      </DropdownButton>
      <DropdownContent close={close}>
        <Input href="#" title="Adults" />
        <Input href="#" title="Children" text="Ages 2–12" />
        <Input href="#" title="Infants" text="Under 2n" />
        <Container>
          <Apply type="submit">Apply</Apply>
        </Container>
      </DropdownContent>
    </DropdownMenu>
  );
};

const DropdownMenu = styled.div`
  width: 100%;
  height: 80px;
  ${flexbox({ dir: "column" })}
  position: relative;
  display: inline-block;
`;

const Lable = styled.label`
  width: 100%;
  margin-bottom: 2.5px;
  font-family: Arial;
`;

const DropdownButton = styled.div`
  width: 100%;
  height: 50px;
  ${border({ bc: "#006c70" })}
  ${flexbox({ jc: "space-between" })}
  padding: 1rem;
  box-sizing: border-box;
  background-color: inherit;
  cursor: pointer;
  font-family: Arial;
`;

const Arrow = styled(IoIosArrowUp)`
  width: 20px;
  height: 10px;
  transform: rotate(${({ close }) => (close ? "180deg" : "0deg")});
`;

const DropdownContent = styled.div`
  width: 100%;
  background-color: inherit;
  display: ${({ close }) => (close ? "block" : "none")};
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  padding: 0.5rem;
  ${flexbox({ jc: "flex-end" })}
  box-sizing: border-box;
  background-color: inherit;
  position: absolute;
  background-color: #f9f9f9;
`;

const Apply = styled(TitleType2)`
  color: ${colorPallet.borderColorActiv};

  :hover {
    border-bottom: 1px solid ${colorPallet.borderColorActiv};
  }
`;
