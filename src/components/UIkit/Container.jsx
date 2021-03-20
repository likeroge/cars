import styled from "styled-components";

export const Container = (props) => {
    const Container = styled.div`
    display:flex;
  `
    return (
        <Container>
            {props.children}
        </Container>
    )
}
