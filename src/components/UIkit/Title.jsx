import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-size: ${(props) => props.text || "30px"};
  line-height: ${(props) => props.lineHeight || "35px"};
  margin-top: ${(props) => props.mt || "0px"};
  margin-bottom: ${(props) => props.mb || "0px"};

 
  

`

export const Title = (props) => {
  return <StyledTitle {...props} />;
};
