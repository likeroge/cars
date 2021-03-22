import styled from "styled-components";

const StyledSlider = styled.div`
  background: black;

  @media ${(props) => props.theme.media.widescreen} {
    width: 50%;
  }
  @media ${(props) => props.theme.media.desktop} {
    min-width: 410px;
  }
  @media ${(props) => props.theme.media.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;

export const Slider = (props) => {
  return (
    <StyledSlider {...props}>
      <h1>Slider</h1>
    </StyledSlider>
  );
};
