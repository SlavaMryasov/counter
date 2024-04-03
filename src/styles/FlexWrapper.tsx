import styled from "styled-components";

type FlexWrapperPropsType = {
  justify: string;
  align: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  height: 90vh;
  gap: 50px;

  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`;
