import styled, { css } from "styled-components";
import { BurgerBtn } from "../UIkit/BurgerBtn";
import { Button } from "../UIkit/Button";
import { Flex } from "../UIkit/Flex";
import { Text } from "../UIkit/Text";
import { Title } from "../UIkit/Title";

export const Head = (props) => {
  const StyledHeader = styled.div`
    min-width: 50%;
    flex: 1;
  `;

  const HeadTitle = styled(Title)`
    @media ${(props) => props.theme.media.phone} {
      font-size: ${(props) => "32px"};
      line-height: ${(props) => "100%"};
    }
  `;

  const HeadText = styled(Text)`
    line-height: 30px;
    font-weight: 300;
    font-size: 26px;
    @media ${(props) => props.theme.media.phone} {
      font-size: 18px;
      line-height: 21px;
    }
  `;

  const Wrapper = styled(Flex)`
    padding: 32px 64px;
    @media ${(props) => props.theme.media.phone} {
      padding: 16px;
  
    }
  `;

  const MobileBurgerBtn = styled(BurgerBtn)`
    display: none;
    @media ${(props) => props.theme.media.phone} {
      display: block;
    }
  `;

  const MobileFooter = styled.div`
    height: 72px;
    background: #151B1F;
  `

  return (
    <StyledHeader {...props}>
      <Wrapper height="100vh" direction="column" justify="space-between">
        <Flex align="center" justify="space-between">
          <MobileBurgerBtn />

          <Title color="#0ec261">Need for drive</Title>

          <Text>Ульяновск</Text>

        </Flex>
        <Flex direction="column">
          <HeadTitle large>Каршеринг</HeadTitle>
          <HeadTitle large color="#0ec261" mb="34px">
            Need for drive
          </HeadTitle>
          <HeadText lineHeight="30px" fontWeight="300" text="26px">
            Поминутная аренда авто твоего города
          </HeadText>
          <Button light mt="60px">
            Забронировать
          </Button>
        </Flex>
        <Flex justify="space-between">
          <Text>© 2016-2019 «Need for drive»</Text>
          <Text>8 (495) 234-22-44</Text>
        </Flex>
      </Wrapper>
    </StyledHeader>
  );
};
