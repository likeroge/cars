import styled, { css } from "styled-components";
import { Button } from "../UIkit/Button";
import { Container } from "../UIkit/Container";
import { Text } from "../UIkit/Text";
import { Title } from "../UIkit/Title";

export const Header = () => {
  const StyledHeader = styled.div`
    flex: 1;
  `;
  const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  `;

  const Head = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

  const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

  const PhoneText = styled.p`
    font-size: 13px;
    line-height: 15px;
    color: #121212;
  `;

  const MainPart = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Head>
            <Title green>Need for drive</Title>
            <Text>Ульяновск</Text>
          </Head>
          <MainPart>
            <Title large>Каршеринг</Title>
            <Title large green>
              Need for drive
            </Title>
            <Text large>Поминутная аренда авто твоего города</Text>
            <Button marginTop>Забронировать</Button>
          </MainPart>
          <Footer>
            <Text>© 2016-2019 «Need for drive»</Text>
            <PhoneText>8 (495) 234-22-44</PhoneText>
          </Footer>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};
