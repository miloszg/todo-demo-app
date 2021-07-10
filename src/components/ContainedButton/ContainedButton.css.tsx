import ButtonComponent, { ButtonProps } from "@material-ui/core/Button";
import styled from "styled-components";

export const Button = styled(ButtonComponent)<ButtonProps>`
  &.MuiButton-contained {
    min-width: 80px;
  }
`;
