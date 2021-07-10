import { ListItem, ListItemIcon } from "@material-ui/core";
import styled from "styled-components";

export const CategoryListItem = styled(ListItem)`
  &.MuiListItem-root {
    font-size: 24px;
    color: #fff;
    padding: 10px;
    color: rgba(255, 255, 255, 0.7);
    background-color: #232f3e;
    box-shadow: 0 -1px 0 #404854 inset;
    &:hover,
    :focus {
      background-color: rgba(255, 255, 255, 0.08);
    }
  }
`;
export const ChildListItem = styled(ListItem)`
  &.MuiListItem-root {
    font-size: 20px;
    color: #fff;
    padding: 5px 10px;
    &:hover,
    :focus {
      background-color: rgba(255, 255, 255, 0.08);
    }
  }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  &.MuiListItemIcon-root {
    min-width: auto;
    margin-right: 25px;
  }
`;
