import { Todo } from "../../components/Content/Content";

export type UseToggleProps = [boolean, () => void];

export type UseTodosProps = [
  Todo[],
  () => Promise<void>,
  (data: Todo) => Promise<void>,
  (id: number | null) => Promise<void>,
  (id: number, data: Todo) => Promise<void>
];

export type UseEditDataProps = [
  Todo | null | undefined,
  () => void,
  (data: Todo) => void
];
