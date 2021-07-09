import { AppBar, Button, SvgIconProps } from "@material-ui/core";
import styled from "styled-components";
import Search from "@material-ui/icons/Search";
import Refresh from "@material-ui/icons/Refresh";
import { Add } from "@material-ui/icons";
import palette from "../../assets/palette";

export const PaperWrapper = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
`;

export const StyledAppBar = styled(AppBar)`
  &.MuiAppBar-root {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 5px;
  }
`;

export const AddIcon = styled(Add)<SvgIconProps>`
  &.MuiSvgIcon-root {
    cursor: pointer;
    font-size: 24px;
    &:hover {
      color: ${palette.ACTION_DARK};
    }
  }
`;

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    margin-right: 10px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 40px 16px;
`;

export const SearchIcon = styled(Search)`
  &.MuiSvgIcon-root {
    display: block;
    color: inherit;
  }
`;

export const RefreshIcon = styled(Refresh)`
  &.MuiSvgIcon-root {
    display: block;
    color: inherit;
  }
`;
