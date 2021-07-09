import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions, {
  DialogActionsProps,
} from "@material-ui/core/DialogActions";
import DialogContent, {
  DialogContentProps,
} from "@material-ui/core/DialogContent";
import DialogTitle, { DialogTitleProps } from "@material-ui/core/DialogTitle";
import Grid, { GridProps } from "@material-ui/core/Grid";
import { SvgIconProps } from "@material-ui/core/SvgIcon/SvgIcon";
import { Close } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import palette from "../../assets/palette";
import styled from "styled-components";

export const GridWrapper = styled(Grid)<GridProps>`
  &.MuiGrid-container {
    padding-top: 0.5rem;
  }
`;

export const GridItem = styled(Grid)<GridProps>`
  &.MuiGrid-item {
    padding: 0.5rem;
    width: 100vw;
    text-align: start;
  }
`;

export const DialogWrapper = styled(Dialog)<DialogProps>`
  & .MuiPaper-root {
    text-align: center;
  }
`;

export const DialogContentWrapper = styled(DialogContent)<DialogContentProps>`
  &.MuiDialogContent-root {
    padding: 0.5rem;
  }
`;

export const DialogActionWrapper = styled(DialogActions)<DialogActionsProps>`
  &.MuiDialogActions-root {
    padding: 0.5rem;
  }
`;

export const DialogTitleWrapper = styled(DialogTitle)<DialogTitleProps>`
  &.MuiDialogTitle-root {
    color: #000;
    background-color: ${palette.ACTION_LIGHTER};
    text-align: left;
  }
`;

export const CloseIcon = styled(Close)<SvgIconProps>`
  &.MuiSvgIcon-root {
    cursor: pointer;
    &:hover {
      color: ${palette.ACTION_DARK};
    }
  }
`;

export const DialogParagraph = styled.p`
  white-space: pre-wrap;
  margin-right: 0.8em;
  margin-left: 0.8em;
`;

export const FileTile = styled.div`
  border-radius: 2rem;
  border: 1px solid #cbcbcb;
  padding: 0.6rem 2.5rem;
  margin-bottom: 0.3rem;
  max-width: 8rem;
  font-size: 0.9rem;
  align-items: center;
  justify-content: space-between;
  color: #434343;
  display: flex;
`;

export const DeleteFileIcon = styled(DeleteIcon)<SvgIconProps>`
  &.MuiSvgIcon-root {
    margin-left: 0.8rem;
    font-size: 2.2rem;
    cursor: pointer;
    &:hover {
      color: ${palette.ACTION_DARK};
    }
  }
`;

export const PreviouslyUploadedSubheading = styled.h5``;
