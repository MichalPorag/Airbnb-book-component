//import React, { useState } from "react";
import React from "react";
import styled from "styled-components";
// import { flexbox } from "../styles/mixing";
// import { border } from "../styles/mixing";
// import { colorPallet } from "../styles/setup";
// import { titlesSize } from "../styles/setup";

export default props => {
  return <Form2>{props.title}</Form2>;
};

const Form2 = styled.div`
  height: 70px;
`;

// const Title = styled.h1`
//   font-size: ${titlesSize.title2};
//   color: ${colorPallet.titleColor};
// `;

// const Input = styled.input`

// `;
