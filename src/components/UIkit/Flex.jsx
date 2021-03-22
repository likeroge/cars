import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  height: ${(props) => props.height || "auto"};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${(props) => props.margin || "0"};
  margin-top: ${(props) => props.mt || "0"};
  margin-bottom: ${(props) => props.mb || "0"};

  padding: ${(props) => props.padding || "0"};
`;

export const Flex = (props) => <StyledFlex {...props} />;
