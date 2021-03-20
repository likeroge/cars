import styled, {css} from "styled-components";

export const Container = (props) => {
    const Container = styled.div`
    height:100vh;
    display:flex;
    padding: 32px 64px;
    ${props.fluid &&
    css`
      padding: 0;
    `}
  `
   
    return (
        <Container>
            {props.children}
        </Container>
    )
}
