import styled from "styled-components";

const StyledAppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const AppWrapper = (props) => {
  return <StyledAppWrapper {...props} />;
};
