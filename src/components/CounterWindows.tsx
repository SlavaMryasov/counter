import styled from "styled-components";
import { Box } from "../styles/Box";
import { Button } from "./globalComponents/Button";
import { Theme } from "../styles/Theme";
import { DisabledType } from "../App";

type CounterWindowsPropsType = {
  counterValue: string | number;
  maxValue: number;
  inc: () => void;
  reset: () => void;
  disabled: DisabledType
};

export const CounterWindow: React.FC<CounterWindowsPropsType> = ({
  counterValue,
  maxValue,
  inc,
  reset,
  disabled
}) => {
  return (
    <Box width="400px" height="300px">
      <Box width="360px" height="150px">
        <StyledCounterValue maxValue={maxValue} counterValue={counterValue}>
          {counterValue}
        </StyledCounterValue>
      </Box>
      <Box width="360px" height="90px" direction="row">
        <Button title="inc" callBack={inc} disabled={disabled.inc}/>
        <Button title="reset" callBack={reset} disabled={disabled.reset}/>
      </Box>
    </Box>
  );
};

type StyledCounterValuePropsType = {
  maxValue: number | string;
  counterValue: number | string;
};

const StyledCounterValue = styled.h3<StyledCounterValuePropsType>`
  color: ${(props) => props.counterValue < props.maxValue ||
   props.counterValue ==="enter values and press 'SET'"
      ? `${Theme.colors.accent}`
      : `${Theme.colors.mistake}`};

  font-size: ${props=> typeof(props.counterValue) === "number"?`50px`: '25px'};
  font-weight: 700;
`;
