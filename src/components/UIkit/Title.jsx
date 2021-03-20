import styled, { css } from "styled-components";

export const Title = (props) => {
  const StyledTitle = styled.h1`
    color: #121212;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    ${props.large &&
    css`
      font-size: 70px;
      line-height: 66px;
    `}
    ${props.green &&
    css`
      color: #0ec261;
      margin-bottom: 34px;
    `}
  `;
  return <StyledTitle>{props.children}</StyledTitle>;
};
