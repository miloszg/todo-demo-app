import { Todo } from "../components/Content/types";

export const filterSearch = (todos: Todo[], searchQuery: string) => {
  if (searchQuery) {
    return todos.filter(
      (todo) =>
        todo.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    );
  } else {
    return todos;
  }
};
