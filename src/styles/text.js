import styled from "styled-components";
import { colorPallet } from "../styles/setup";
import { titlesSize } from "../styles/setup";
import { title } from "../styles/mixing";
// import { border } from "../styles/mixing";
import { flexbox } from "../styles/mixing";

export const TitleType1 = styled.h1`
  ${title}
  font-size: ${titlesSize.title1};
  color: ${colorPallet.titleColor};
`;

export const TitleType2 = styled.h1`
  ${title}
  font-size: ${titlesSize.title2};
`;

export const TextType1 = styled.p`
  ${title}
  font-size: ${titlesSize.text};
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  padding: 0.5rem;
  ${flexbox}
  flex-direction: column;
  box-sizing: border-box;
`;
