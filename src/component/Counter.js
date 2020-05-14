/*---------------------------
          Imports
---------------------------*/
/*      Libraries
---------------------------*/
import React, { useState } from "react";
import styled from "styled-components";

/*      Components
---------------------------*/

/*    Style Component
---------------------------*/
import { flexbox } from "../styles/mixing";
import { border } from "../styles/mixing";
import { Circle } from "./../styles/text";
import { title } from "../styles/mixing";
import { colorPallet } from "../styles/setup";

export default props => {
  const [count, setCount] = useState(0);

  return (
    <Counter>
      <Minus count={count} onClick={() => setCount(count - 1)}>
        -
      </Minus>
      <Count>{count}</Count>
      <Pluse onClick={() => setCount(count + 1)}>+</Pluse>
    </Counter>
  );
};

const Counter = styled.div`
  height: 100%;
  padding: 0.5rem;
  ${flexbox}
  box-sizing: border-box;
`;

const Minus = styled(Circle)`
  ${({ count }) =>
    border({
      bc: count > 0 ? colorPallet.borderColorActiv : colorPallet.borderColor,
      br: "50%"
    })}
`;

const Count = styled(Circle)`
  ${title}
`;

const Pluse = styled(Circle)`
  ${border({ bc: colorPallet.borderColorActiv, br: "50%" })}
`;
