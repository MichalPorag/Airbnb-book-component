/*    Style Component
---------------------------*/
import { colorPallet } from "../styles/setup";
import { titlesSize } from "../styles/setup";

export const flexbox = ({
  dir = "row",
  jc = "center",
  ai = "center"
} = {}) => ` 
  display: flex;
  flex-direction: ${dir};
  justify-content: ${jc};
  align-items: ${ai};
`;

export const border = ({
  br = "5px",
  bc = colorPallet.borderColor,
  bSize = "1px",
  bStyle = "solid"
} = {}) => `
  border-radius: ${br};
  border: ${bSize} ${bStyle} ${bc};
`;

export const button = ({
  standatrWidth = "100px",
  standatrHeigh = "50px",
  bgc = colorPallet.buttonColor
} = {}) => `
  width: ${standatrWidth};
  height: ${standatrHeigh};
  background-color: ${bgc};
`;

export const title = ({ fs = "", fc = "" } = {}) => `
  font-size: ${fs};
  color: ${fc};
  font-family: Arial;
`;

export const buttonTitle = ({
  fs = titlesSize.title2,
  fc = colorPallet.buttonColor
} = {}) => `
  font-size: ${fs};
  color: ${fc};
  font-family: Arial;
`;

export const backgroundImage = ({
  bgr = "no-repeat",
  bgs = "cover",
  bgp = "center"
} = {}) => `
  background-repeat: ${bgr}; 
  background-size: ${bgs};
  background-position: ${bgp};
`;

export const circle = ({ w = "40px" } = {}) => `
  width: ${w};
  height: 30px;
  padding: 0.5rem;
  border-radius: 50%;
  border-color: red;
  flex-direction: column;
  box-sizing: border-box;
`;
