import styled from "styled-components";

export const Slider = () => {
  const StyledSlider = styled.div`
    background: black;
   
    @media screen and (max-width: 1023px) {
      display: none;
    }
    @media screen and (min-width: 1024px) {
      width: 410px;
    }
    @media screen and (min-width: 1440px) {
      width: 50%;
    }
  `;
  return (
    <StyledSlider>
      <h1>Slider</h1>
    </StyledSlider>
  );
};
