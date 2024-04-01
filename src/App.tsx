import { useState } from "react";
import "./App.css";
import { ParamWindow } from "./components/ParamWindow";
import { CounterWindow } from "./components/CounterWindows";
import { FlexWrapper } from "./styles/FlexWrapper";

function App() {
  const [maxValue, setMaxValue] = useState(1);
  const [startValue, setMinValue] = useState(0);
  const [counterValue, setCounterValue] = useState<string | number>("enter values and press 'SET'")

  const setMaxHandler = (currentMaxValue: number) => {
    setMaxValue(currentMaxValue);
  };

  const setStartHandler = (currentMinValue: number) => {
    setMinValue(currentMinValue);
  };

  const setCounterValueHandler = () => {
    setCounterValue(startValue)
  }

  const inc = () => {
    typeof(counterValue) === 'number' 
    ? counterValue === maxValue ? setCounterValue(counterValue)
    : setCounterValue(counterValue+1)
    : setCounterValue('Алее, сетни цыфры')
  }

  const reset = () => {
    setCounterValue(startValue)
  }

  return (
    <div className="App">
      <FlexWrapper justify="center" align="center">
        <ParamWindow
          maxValue={maxValue}
          setMaxValue={setMaxHandler}
          startValue={startValue}
          setStartValue={setStartHandler}
          setCounterValue={setCounterValueHandler}
        />
        <CounterWindow counterValue={counterValue} maxValue={maxValue} inc={inc} reset={reset}/>
      </FlexWrapper>
    </div>
  );
}

export default App;
