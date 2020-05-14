/*---------------------------
          Imports
---------------------------*/
/*      Libraries
---------------------------*/
//import React, { useState } from "react";
import React from "react";
import styled from "styled-components";
import Form from "./Form";

import { flexbox } from "../styles/mixing";
// import { colorPallet } from "../styles/setup";
// import { titlesSize } from "../styles/setup";

export default props => {
  return (
    <Form2Container>
      <Form title="CHECK-IN" id="date-in" placeholder="mm/dd/yyyy" />
      <Form Menu title="CHECKOUT" id="date-out" placeholder="mm/dd/yyyy" />
    </Form2Container>
  );
};

const Form2Container = styled.div`
  box-sizing: border-box;
  ${flexbox}
`;
