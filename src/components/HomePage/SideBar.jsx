import styled from "styled-components";

export const SideBar = () => {
  const StyledSideBar = styled.div`
    width: 64px;
    height: 100vh;
    background: #151b1f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    @media screen and (max-width: 767px) {
      height: 36px;
      background: #fff;
      color: #111;
      a {
        display: none;
      }
    }
    @media screen and (min-width: 768px) {
      width: 85.77px;
    }
    @media screen and (min-width: 1024px) {
      width: 65px;
    }

    a {
      text-decoration: none;
      color: #0ec261;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-weight: 700;
      margin-bottom: 32px;
    }
  `;

  return (
    <StyledSideBar>
      <h1>Burger</h1>
      <a href="#">Eng</a>
    </StyledSideBar>
  );
};
