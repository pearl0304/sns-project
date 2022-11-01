import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  .header-box {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
  }

  .tab-bar {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
  }

  .tab-bar span {
    width: 20px;
    height: 20px;
    display: block;
    background: url(../images/tabbar.svg);
    background-position: 0 -51px;
    text-indent: -9999px;
  }
`;
