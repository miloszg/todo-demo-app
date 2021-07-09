import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

interface HeaderProps {
  onDrawerToggle: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <AppBar
      component="header"
      color="primary"
      position="static"
      elevation={0}
      style={{ padding: 10 }}
    >
      <Toolbar>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs>
            <Typography color="inherit" variant="h5" component="h1">
              Knowunity - Todo App
            </Typography>
          </Grid>
          {/* <Grid item> tutaj na menu
            <Tooltip title="Help">
              <IconButton color="inherit">
                <HelpIcon />
              </IconButton>
            </Tooltip>
          </Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
