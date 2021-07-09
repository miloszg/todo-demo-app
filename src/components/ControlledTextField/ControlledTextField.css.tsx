import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import palette from "../../assets/palette";
import styled from "styled-components";

export const TextFieldComponent = styled(TextField)<TextFieldProps>`
  &.MuiTextField-root {
    padding-right: 0.5rem;
  }
  && .MuiInput-root:hover::before {
    border-color: ${palette.ACTION_DARK};
  }
  & .MuiOutlinedInput-root:hover fieldset {
    border: 2px solid ${palette.ACTION_DARK};
  }
`;
