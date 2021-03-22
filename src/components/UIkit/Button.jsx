import styled, { css } from "styled-components";

const StyledButton = styled.button`
    font-weight: 500;
    font-size: 18px;
    /* line-height: 21.09px; */
    cursor: pointer;
    color: #fff;
    background: linear-gradient(90deg, #13493f 0%, #0c7b1b 100%);
    border: none;
    outline: none;
    display: inline-block;
    border-radius: 4px;
        width: 164px;
        height: 48px;
    &:active{
      transform: scale(0.98);
    };
    margin-top: ${(props) => props.mt || "0px"};
    margin-bottom: ${(props) => props.mb || "0px"};

    @media ${(props) => props.theme.media.phone} {
      width: 100vw;
      height:50px;
    }

    ${(props) =>
      props.large &&
      css`
        background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
        width: 250px;
        border-radius: 8px;
      `}

      ${(props) =>
        props.light &&
        css`
          background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
        `}
    ${(props) =>
      props.red &&
      css`
        background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%);
      `}
    ${(props) =>
      props.purple &&
      css`
        background: linear-gradient(90deg, #281349 0%, #720c7b 100%);
      `}
    ${(props) =>
      props.additional &&
      css`
        background: linear-gradient(90deg, #132949 0%, #0c7b67 100%);
      `}
  `;

export const Button = (props) => {
  return <StyledButton {...props} />;
};
