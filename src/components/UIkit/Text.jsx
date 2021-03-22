import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${(props) => props.text || "14px"};
  line-height: ${(props) => props.lineHeight || "16px"};
  color: ${(props) => props.color || "#999999"};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export const Text = (props) => {
  return <StyledText {...props} />;
};
