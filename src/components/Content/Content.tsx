import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import {
  AddIcon,
  ContentWrapper,
  PaperWrapper,
  RefreshIcon,
  SearchIcon,
  StyledAppBar,
  StyledButton,
} from "./Content.css";

import CardSection from "../CardSections";

import { useToggleState } from "../../utils/hooks/useToggle";
import AddEntryDialog from "../EntryDialog";
import { useTodos } from "../../utils/hooks/useTodos";
import { useEditData } from "../../utils/hooks/useEditData";

export interface ContentProps {}

export type Todo = {
  title: string;
  description: string;
  id: number;
  isDone: boolean;
  timestamp: string;
};

const Content = (props: ContentProps) => {
  const [todos, getTodos, addTodo, deleteTodo, updateTodo] = useTodos([]);
  const [addChecked, handleAddChanged] = useToggleState(false);

  const [editData, resetEditData, changeEditData] =
    useEditData(handleAddChanged);

  return (
    <PaperWrapper>
      <StyledAppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item>
              <StyledButton
                onClick={handleAddChanged}
                variant="contained"
                color="primary"
              >
                <AddIcon />
              </StyledButton>
              <Tooltip title="Reload">
                <IconButton onClick={getTodos}>
                  <RefreshIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppBar>
      <ContentWrapper>
        {todos?.length > 0 ? (
          <CardSection
            todos={todos}
            deleteTodo={deleteTodo}
            changeEditData={changeEditData}
            updateTodo={updateTodo}
          />
        ) : (
          <Typography color="textSecondary" align="center">
            No todo entries have been added!
          </Typography>
        )}
      </ContentWrapper>
      {addChecked && (
        <AddEntryDialog
          addChecked={addChecked}
          handleAddChanged={handleAddChanged}
          data={editData}
          resetEditData={resetEditData}
          updateTodo={updateTodo}
          addTodo={addTodo}
        />
      )}
    </PaperWrapper>
  );
};

export default Content;
