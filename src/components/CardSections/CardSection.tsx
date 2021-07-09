import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  CardActionWrapper,
  CardWrapper,
  DeleteIcon,
  EditIcon,
  GridItem,
  GridWrapper,
  StyledCheckbox,
  StyledFormControlLabel,
} from "./CardSection.css";

import { Chip } from "@material-ui/core";
import TimeIcon from "@material-ui/icons/QueryBuilder";
import { Todo } from "../Content/types";

interface CardSectionProps {
  todos: Todo[];
  deleteTodo: (id: number) => Promise<void>;
  changeEditData: (data: Todo) => void;
  updateTodo: (id: number, data: Todo) => Promise<void>;
}

const CardSection = ({
  todos,
  deleteTodo,
  changeEditData,
  updateTodo: handleChange,
}: CardSectionProps) => (
  <GridWrapper
    container
    spacing={1}
    direction="row"
    alignItems="center"
    justify="center"
  >
    {todos.map((todo: Todo, id: number) => (
      <GridItem key={`todo-entry-${todo.id}-${id}`} item>
        <CardWrapper $isDone={todo.isDone}>
          <CardContent>
            <StyledFormControlLabel
              label={
                todo.isDone ? "Todo completed" : "Complete this todo entry"
              }
              control={<StyledCheckbox />}
              checked={todo.isDone}
              onChange={() =>
                handleChange(todo.id, { ...todo, isDone: !todo.isDone })
              }
              name="isDone"
            />
            <Chip
              icon={<TimeIcon />}
              label={new Date(todo?.timestamp).toLocaleString("de")}
              color="primary"
              variant="outlined"
            />
            <Typography variant="h5" component="h2">
              {todo?.title ?? ""}
            </Typography>
            <Typography variant="body2" component="p">
              {todo?.description}
            </Typography>
          </CardContent>
          <CardActionWrapper>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              onClick={() => changeEditData(todo)}
            >
              <EditIcon />
            </Button>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              onClick={() => deleteTodo(todo?.id)}
            >
              <DeleteIcon />
            </Button>
          </CardActionWrapper>
        </CardWrapper>
      </GridItem>
    ))}
  </GridWrapper>
);

export default CardSection;
