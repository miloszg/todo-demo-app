import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { Grid, IconButton } from "@material-ui/core";
import ContainedButton from "../../components/ContainedButton";
import ControlledTextField from "../../components/ControlledTextField";
import { AddEntryDialogProps } from "./types";
import {
  CloseIcon,
  DialogActionWrapper,
  DialogContentWrapper,
  DialogTitleWrapper,
  DialogWrapper,
  GridItem,
  GridWrapper,
} from "./EntryDialog.css";
import { Todo } from "../Content/types";

const AddEntryDialog = ({
  addChecked,
  handleAddChanged,
  data,
  resetEditData,
  updateTodo,
  addTodo,
}: AddEntryDialogProps) => {
  const { control, handleSubmit, formState, reset } = useForm<Todo>({
    mode: "onChange",
    defaultValues: {
      title: undefined,
      description: undefined,
      isDone: false,
      timestamp: new Date().toISOString(),
    },
  });
  const intl = useIntl();
  const isEdited = !!data;

  useEffect(() => {
    if (isEdited) {
      reset({
        title: data?.title ?? "",
        description: data?.description ?? "",
        isDone: data?.isDone ?? false,
        timestamp: data?.timestamp ?? new Date().toISOString(),
      });
    }
  }, [data, isEdited, reset]);

  const onSubmit = handleSubmit(async (formData: Todo) => {
    if (isEdited) {
      data?.id && updateTodo(data.id, formData);
      resetEditData();
    } else {
      addTodo(formData);
    }

    handleAddChanged();
    reset({
      title: "",
      description: "",
      isDone: false,
      timestamp: "",
    });
  });

  const handleOnClose = () => {
    resetEditData();
    handleAddChanged();
  };

  return (
    <DialogWrapper
      fullScreen={false}
      fullWidth
      maxWidth="sm"
      open={addChecked}
      onClose={handleOnClose}
    >
      <DialogTitleWrapper color="primary">
        <Grid container direction="row" alignItems="center">
          <Grid xs={12} sm={6} item container justify="flex-start">
            {intl.formatMessage({
              id: `ENTRY_DIALOG.${isEdited ? "EDIT" : "ADD_NEW"}`,
            })}
          </Grid>
          <Grid xs={12} sm={6} item container justify="flex-end">
            <IconButton aria-label="close" onClick={handleOnClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitleWrapper>
      <DialogContentWrapper>
        <form className="form" onSubmit={onSubmit}>
          <GridWrapper
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <GridItem xs={12} item>
              <ControlledTextField
                label="FIELD.TITLE"
                name="title"
                control={control}
                required={true}
                variant="outlined"
              />
            </GridItem>
            <GridItem xs={12} item>
              <ControlledTextField
                label="FIELD.DESCRIPTION"
                name="description"
                control={control}
                variant="outlined"
                isMulti={true}
              />
            </GridItem>
          </GridWrapper>
        </form>
      </DialogContentWrapper>
      <DialogActionWrapper>
        <GridItem xs={12} item>
          <ContainedButton
            disabled={!formState.isValid}
            fullWidth
            onClick={onSubmit}
            size="large"
            type="submit"
          >
            {intl.formatMessage({
              id: `ENTRY_DIALOG.${isEdited ? "EDIT" : "SUBMIT"}_BUTTON`,
            })}
          </ContainedButton>
        </GridItem>
        <GridItem xs={12} item>
          <ContainedButton
            fullWidth
            onClick={handleAddChanged}
            size="large"
            color="secondary"
            type="submit"
          >
            {intl.formatMessage({ id: "MODAL.BUTTON_CANCEL" })}
          </ContainedButton>
        </GridItem>
      </DialogActionWrapper>
    </DialogWrapper>
  );
};

export default AddEntryDialog;
