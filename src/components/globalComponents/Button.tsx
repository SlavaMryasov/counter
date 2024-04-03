import styled from "styled-components";
import { Theme } from "../../styles/Theme";

type ButtonPropsType = {
  title: string;
  disabled?: boolean
  callBack?: () => void;
};

export const Button: React.FC<ButtonPropsType> = ({ title,disabled, callBack }) => {
  return <StyledButton disabled={disabled} onClick={callBack}>{title}</StyledButton>;
};

const StyledButton = styled.button`
  display: flex;
  min-width: 100px;
  min-height: 40px;
  justify-content: center;
  background-color: ${Theme.colors.accent};
  border: none;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 700;
  font-variant: small-caps;
  &:active {
    color: ${Theme.colors.accent};
    outline: 2px solid ${Theme.colors.accent};
    background-color: transparent;
  }
`;
