import { FlexWrapper } from "../styles/FlexWrapper";
import { Box } from "../styles/Box";
import { Button } from "./globalComponents/Button";
import { Input } from "./globalComponents/Input";

type ParamWindowsPropsType = {
  maxValue: number;
  startValue: number;
  setMaxValue: (currentMaxValue: number) => void;
  setStartValue: (currentStartValue: number) => void;
  setCounterValue: () => void
};

export const ParamWindow: React.FC<ParamWindowsPropsType> = ({
  maxValue,
  startValue,
  setMaxValue,
  setStartValue,
  setCounterValue
}) => {
  const setMaxHandler = (currentMaxValue: number) => {
    setMaxValue(currentMaxValue);
  };

  const setStartHandler = (currentMinValue: number) => {
    setStartValue(currentMinValue);
  };
  return (
    <Box width="400px" height="300px">
      <Box width="360px" height="150px">
        <Input value={maxValue} callBack={setMaxHandler} />
        <Input value={startValue} callBack={setStartHandler} />
      </Box>
      <Box width="360px" height="90px" direction="row">
        <Button title="set" callBack={setCounterValue}/>
      </Box>
    </Box>
  );
};
