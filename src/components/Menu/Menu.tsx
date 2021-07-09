import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";

import { Omit } from "@material-ui/types";
import {
  ChildListItem,
  CategoryListItem,
  StyledListItemIcon,
} from "./Menu.css";
import { categories } from "./const";

export interface NavigatorProps extends Omit<DrawerProps, "classes"> {}

const Menu = (props: NavigatorProps) => {
  const { ...rest } = props;

  return (
    <Drawer variant="permanent" {...rest}>
      <List disablePadding>
        <CategoryListItem button>
          <StyledListItemIcon>
            <HomeIcon />
          </StyledListItemIcon>
          <ListItemText>Main Page</ListItemText>
        </CategoryListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            {children.map(({ id: childId, icon, link }) => (
              <a
                style={{ textDecoration: "none" }}
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <ChildListItem key={childId} button>
                  <StyledListItemIcon>{icon}</StyledListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ChildListItem>
              </a>
            ))}
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
