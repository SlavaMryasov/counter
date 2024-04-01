import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { ChangeEvent } from "react";

type InputPropsType = {
  value: number;
  callBack: (currentValue: number) => void;
};

export const Input: React.FC<InputPropsType> = ({ value, callBack }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = Number(e.currentTarget.value)
    callBack(currentValue);
  };

  return <StyledInput type="number" value={value} onChange={onChangeHandler} />;
};

type StyledInputPropsType = {
    value: number;
  };

const StyledInput = styled.input<StyledInputPropsType>`
  width: 120px;
  height: 25px;
  border: 3px solid ${props => props.value >= 0? `${Theme.colors.accent}`: `${Theme.colors.mistake}`};
  border-radius: 5px;
`;
