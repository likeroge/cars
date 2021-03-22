import styled from "styled-components";
import { BurgerBtn } from "../UIkit/BurgerBtn";
import { Flex } from "../UIkit/Flex";



const StyledSideBar = styled.div`
  height: 100vh;
  width: 64px;
  background: #151b1f;
  color: #fff;
  a {
    color: #0ec261;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 700;
  }

  @media ${(props) => props.theme.media.widescreen} {
    width: 64px;
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 65px;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 85.77px;
  }
  @media ${(props) => props.theme.media.phone} {
    display: none;
    /* background: #111; */
    /* color: #111; */
    a {
      display: none;
    }
  }
`;

export const SideBar = (props) => {
  return (
      <StyledSideBar {...props}>
        <Flex
          padding="32px 0"
          direction="column"
          justify="space-between"
          align="center"
          height="100%"
        >
          <BurgerBtn/>
          <a href="#">Eng</a>
        </Flex>
      </StyledSideBar>
  );
};
