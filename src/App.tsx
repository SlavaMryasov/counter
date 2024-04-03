import { useState } from "react";
import "./App.css";
import { ParamWindow } from "./components/ParamWindow";
import { CounterWindow } from "./components/CounterWindows";
import { FlexWrapper } from "./styles/FlexWrapper";

export type DisabledType ={
  set: boolean
  inc: boolean
  reset: boolean
}

function App() {
  const [maxValue, setMaxValue] = useState(0);
  const [startValue, setMinValue] = useState(0);
  const [counterValue, setCounterValue] = useState<string | number>(
    "enter values and press 'SET'"
  );

  const [disabled, setDisable] = useState<DisabledType>({
    set:false, inc:true, reset:true})

  const setMaxHandler = (currentMaxValue: number) => {
    setMaxValue(currentMaxValue);
  };

  const setStartHandler = (currentMinValue: number) => {
    setMinValue(currentMinValue);
  };

  const setCounterValueHandler = () => {
    if (maxValue > startValue) {
      setCounterValue(startValue);
      setDisable({...disabled, set: true, inc: false, reset: false})
      if (startValue< 0){
        setCounterValue('Введите положительные числа')
      }
    }
     else {
      setCounterValue("стартовое значение должно быть меньше максимального");
      setTimeout(() => setCounterValue("enter values and press 'SET'"), 2000);
    }
  };

  const inc = () => {
    if (typeof counterValue === "number") {
      if (counterValue >= maxValue) {
        setCounterValue(counterValue);
        setDisable({...disabled, inc: true})
      } else {
        setCounterValue(counterValue + 1);
      }
    } else {
      setCounterValue("Алее, сетни цыфры");
    }
  };

  const reset = () => {
    setCounterValue(startValue);
    setDisable({...disabled, set: false, reset: true, inc: true})
  };


  return (
    <div className="App">
      <FlexWrapper justify="center" align="center">
        <ParamWindow
          maxValue={maxValue}
          setMaxValue={setMaxHandler}
          startValue={startValue}
          setStartValue={setStartHandler}
          setCounterValue={setCounterValueHandler}
          disabled={disabled}
        />
        <CounterWindow
          counterValue={counterValue}
          maxValue={maxValue}
          inc={inc}
          reset={reset}
          disabled={disabled}
        />
      </FlexWrapper>
    </div>
  );
}

export default App;
