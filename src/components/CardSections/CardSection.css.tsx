import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import {
  CardActions,
  FormControlLabel,
  Grid,
  SvgIconProps,
  Typography,
  TypographyProps,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import palette from "../../assets/palette";
import { Edit, Delete } from "@material-ui/icons";
import { CardProps } from "./types";

export const GridWrapper = styled(Grid)`
  &.MuiGrid-root {
    width: 100%;
    display: flex;
  }
`;

export const GridItem = styled(Grid)`
  &.MuiGrid-root {
    margin: 5px;
  }
`;

export const CardWrapper = styled(Card)<CardProps>`
  &.MuiCard-root {
    width: 350px;
    opacity: ${({ $isDone }) => ($isDone ? 0.5 : 1)};
  }
`;

export const EditIcon = styled(Edit)<SvgIconProps>`
  &.MuiSvgIcon-root {
    cursor: pointer;
    font-size: 24px;
    &:hover {
      color: ${palette.ACTION_DARK};
    }
  }
`;

export const StyledTitle = styled(Typography)<TypographyProps>`
  &.MuiTypography-root {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 0;
  }
`;

export const StyledDescription = styled(Typography)<TypographyProps>`
  &.MuiTypography-root {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 60px;
  }
`;

export const DeleteIcon = styled(Delete)<SvgIconProps>`
  &.MuiSvgIcon-root {
    cursor: pointer;
    font-size: 24px;
    &:hover {
      color: ${palette.ACTION_DARK};
    }
  }
`;

export const CardActionWrapper = styled(CardActions)`
  &.MuiCardActions-root {
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: 10px;
    }
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    display: block;
    margin-bottom: 5px;
  }
`;

export const StyledCheckbox = withStyles({
  root: {
    color: "red",
    "&$checked": {
      color: "green",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
