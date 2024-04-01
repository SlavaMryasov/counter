import styled from "styled-components";
import { Theme } from "./Theme";

type BoxPropsType = {
  width: string;
  height: string;
  direction?: string;
};

export const Box = styled.div<BoxPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: space-evenly;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background-color: transparent;
  border: 3px solid ${Theme.colors.accent};
`;
