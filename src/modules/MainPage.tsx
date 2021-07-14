import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Navigator from "../components/Menu";
import Content from "../components/Content";
import Header from "../components/Header";
import {
  AppWrapper,
  ContentWrapper,
  FooterWrapper,
  PageWrapper,
  StyledDrawer,
} from "./MainPage.css";
import { drawerWidth } from "./const";
import { theme } from "../assets/theme";
import ToastProvider from "../components/ToastProvider/";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © Todoify ${new Date().getFullYear()}.`}
    </Typography>
  );
};

export interface MainPageProps {}

const MainPage = (props: MainPageProps) => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <ToastProvider />
        <CssBaseline />
        <StyledDrawer>
          <Navigator PaperProps={{ style: { width: drawerWidth } }} />
        </StyledDrawer>
        <AppWrapper>
          <Header />
          <ContentWrapper>
            <Content />
          </ContentWrapper>
          <FooterWrapper>
            <Copyright />
          </FooterWrapper>
        </AppWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default MainPage;
