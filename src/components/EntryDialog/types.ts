import { Todo } from "../Content/Content";

export interface DialogProps {
  addChecked: boolean;
  handleAddChanged: () => void;
}

export interface AddEntryDialogProps extends DialogProps {
  data?: Todo | null;
  resetEditData: () => void;
  updateTodo: (id: number, data: Todo) => Promise<void>;
  addTodo: (data: Todo) => Promise<void>;
}
