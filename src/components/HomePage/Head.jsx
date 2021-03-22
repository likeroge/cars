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

  const FeatureTitle = styled(Title)`
    @media ${(props) => props.theme.media.phone} {
      font-size: ${(props) => "32px"};
      line-height: ${(props) => "100%"};
    }
  `;

  const HeaderBlock = styled(Flex)`
    width: 100%;
    @media ${(props) => props.theme.media.phone} {
      flex-direction: column;
      align-items: flex-end;
    }
  `;

  const HeaderText = styled(Text)`
    @media ${(props) => props.theme.media.phone} {
      margin-top: 9.17px;
    }
  `;

  const FooterText = styled(Text)`
    @media ${(props) => props.theme.media.phone} {
        color: #EEEEEE;
    }
  `;

const FooterPhoneText= styled(Text)`
color: #121212;
@media ${(props) => props.theme.media.phone} {
    color: #0EC261;
}
`;

  const FeatureText = styled(Text)`
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
    @media ${(props) => props.theme.media.tablet} {
      padding: 32px;
    }
    @media ${(props) => props.theme.media.desktop} {
      padding: 32px;
    }
  `;

  const MobileBurgerBtn = styled(BurgerBtn)`
    margin-top: 8px;
    display: none;
    @media ${(props) => props.theme.media.phone} {
      display: block;
    }
  `;

  const MobileFooter = styled(Flex)`
    height: 72px;
    background: #151b1f;
    display: none;
    @media ${(props) => props.theme.media.phone} {
      padding: 16px;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
      justify-content: space-around;
    }
  `;

  return (
    <StyledHeader {...props}>
      <Wrapper height="100vh" direction="column" justify="space-between">
        <Flex>
          <MobileBurgerBtn />
          <HeaderBlock align="center" justify="space-between">
            <Title color="#0ec261">Need for drive</Title>
            <HeaderText>Ульяновск</HeaderText>
          </HeaderBlock>
        </Flex>

        <Flex direction="column">
          <FeatureTitle large>Каршеринг</FeatureTitle>
          <FeatureTitle large color="#0ec261" mb="34px">
            Need for drive
          </FeatureTitle>
          <FeatureText lineHeight="30px" fontWeight="300" text="26px">
            Поминутная аренда авто твоего города
          </FeatureText>
          <Button light mt="60px">
            Забронировать
          </Button>
        </Flex>
        <MobileFooter>
          {/* <Flex justify="space-between"> */}
          <FooterText>© 2016-2019 «Need for drive»</FooterText>
          <FooterPhoneText>8 (495) 234-22-44</FooterPhoneText>
          {/* </Flex> */}
        </MobileFooter>
      </Wrapper>
    </StyledHeader>
  );
};
