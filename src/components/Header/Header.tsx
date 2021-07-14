import React from "react";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { StyledAppBar } from "./Header.css";

interface HeaderProps {}

const Header = (props: HeaderProps) => (
  <StyledAppBar
    component="header"
    color="primary"
    position="static"
    elevation={0}
  >
    <Toolbar>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs>
          <Typography color="inherit" variant="h5" component="h1">
            Todoify
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  </StyledAppBar>
);

export default Header;
