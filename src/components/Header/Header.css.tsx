import { AppBar } from "@material-ui/core";
import styled from "styled-components";
import palette from "../../assets/palette";

export const StyledAppBar = styled(AppBar)`
  &.MuiAppBar-root {
    padding: 10px;
    background: ${palette.LINEAR_GRADIENT};
  }
`;
