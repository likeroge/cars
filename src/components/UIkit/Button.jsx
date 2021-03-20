import styled, { css } from "styled-components";

export const Button = (props) => {
  const StyledButton = styled.button`
    font-family: "Roboto";
    font-weight: 500;
    font-size: 18px;
    line-height: 21.09px;
    color: #fff;
    background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
    border: none;
    outline: none;
    display: inline-block;
    width: 250px;
    height: 48px;
    border-radius: 8px;
    @media (max-width:320px){
        width: 100%;
    }

    ${props.secondary &&
    css`
      background: linear-gradient(90deg, #13493f 0%, #0c7b1b 100%);
      border-radius: 4px;
      width: 164px;
      height: 48px;
    `}

    ${props.red &&
    css`
      background: linear-gradient(90deg, #493013 0%, #7B0C3B 100%);
      border-radius: 4px;
      width: 164px;
      height: 48px;
    `}

    ${props.purple &&
    css`
      background: linear-gradient(90deg, #281349 0%, #720C7B 100%);
      border-radius: 4px;
      width: 164px;
      height: 48px;
    `}

    ${props.additional &&
    css`
      background: linear-gradient(90deg, #132949 0%, #0C7B67 100%);
      border-radius: 4px;
      width: 164px;
      height: 48px;
    `}
  `;

  return <StyledButton>{props.children}</StyledButton>;
}
