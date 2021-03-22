import styled from "styled-components";
import { Flex } from "./Flex";

const StyledBurgerBtn = styled.div`
  /* width: 32px; */
  height: 32px;
  cursor: pointer;
`;

const Bar = styled.span`
  display: block;
  border-radius: 10px;
  margin: 0;
  width: 24px;
  height: 3px;
  background-color: #eee;
  &:not(:first-child) {
    margin-top: 5px;
  }

  @media ${(props) => props.theme.media.phone} {
    width: 19px;
    background-color: #121212;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 32px;
  }
`;

export const BurgerBtn = (props) => {
  return (
    <StyledBurgerBtn {...props}>
      <Bar />
      <Bar />
      <Bar />
    </StyledBurgerBtn>
  );
};
