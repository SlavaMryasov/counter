import { FlexWrapper } from "../styles/FlexWrapper";
import { Box } from "../styles/Box";
import { Button } from "./globalComponents/Button";
import { Input } from "./globalComponents/Input";
import { DisabledType } from "../App";

type ParamWindowsPropsType = {
  maxValue: number;
  startValue: number;
  setMaxValue: (currentMaxValue: number) => void;
  setStartValue: (currentStartValue: number) => void;
  setCounterValue: () => void
  disabled: DisabledType
};

export const ParamWindow: React.FC<ParamWindowsPropsType> = ({
  maxValue,
  startValue,
  setMaxValue,
  setStartValue,
  setCounterValue,
  disabled,
}) => {
  const setMaxHandler = (currentMaxValue: number) => {
    setMaxValue(currentMaxValue);
  };

  const setStartHandler = (currentMinValue: number) => {
    setStartValue(currentMinValue);
  };
 
  const setCounterValueHandler = () => {
    setCounterValue()
  }
  return (
    <Box width="400px" height="300px">
      <Box width="360px" height="150px">
        <Input value={maxValue} callBack={setMaxHandler} />
        <Input value={startValue} callBack={setStartHandler} />
      </Box>
      <Box width="360px" height="90px" direction="row">
        <Button title="set" callBack={setCounterValueHandler} disabled={disabled.set} />
      </Box>
    </Box>
  );
};
