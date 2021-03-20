import styled, { css } from "styled-components";

export const Text = (props) => {
  const StyledText = styled.p`
    font-size: 14px;
    line-height: 16px;
    color: #999999;
    ${props.large &&
    css`
      font-weight: 300;
      font-size: 26px;
      line-height: 30px;
    `}
  `;
  return <StyledText>{props.children}</StyledText>;
};
