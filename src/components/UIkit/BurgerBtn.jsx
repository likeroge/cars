import styled from "styled-components";
import { Flex } from "./Flex";

const StyledBurgerBtn = styled.div`
  width: 32px;
  height: 32px;
    cursor: pointer;
`;

const Bar = styled.span`
display: block;
border-radius: 10px;
margin-top: 8px;
  width: 32px;
  height: 3px;
  background-color: #eee;

  @media ${(props) => props.theme.media.phone} {
    background-color: #121212;;
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
