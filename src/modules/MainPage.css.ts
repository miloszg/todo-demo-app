import styled from "styled-components";
import { drawerWidth } from "./const";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export const StyledDrawer = styled.nav`
  width: ${drawerWidth}px;
  @media (max-width: 676px) {
    display: none;
    flex-shrink: 0;
  }
`;

export const AppWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: ${drawerWidth};
`;

export const ContentWrapper = styled.main`
  flex: 1;
  padding: 15px;
`;

export const FooterWrapper = styled.main`
  padding: 15px;
  background-color: #eaeff1;
`;
