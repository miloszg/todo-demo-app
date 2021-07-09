import { useCallback, useEffect, useState } from "react";
import api from "../../API/api";
import { toast } from "react-toastify";
import { Todo } from "../../components/Content/Content";
import { UseTodosProps } from "./types";

export const useTodos = (initState?: Todo[]): UseTodosProps => {
  const [todos, setTodos] = useState<Todo[]>(initState ?? []);

  const getTodo = useCallback(async () => {
    await api
      .get("/todos.json")
      .then((response) => {
        if (response?.status === 200) {
          const todos = Object.entries(response.data).map(
            (todo: typeof response.data) => ({
              id: todo[0],
              ...todo[1],
            })
          );
          setTodos(todos);
        }
      })
      .catch((error) => {
        toast.error("There seems to be an error while fetching the entries 😥");
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const addTodo = useCallback(
    async (data: Todo) => {
      await api
        .post(`todos.json`, data)
        .then((res) => {
          if (res?.status === 200)
            toast.success("New todo entry has been successfully added 😀!");
        })
        .catch((error) => {
          toast.error("There seems to be an error while adding an entry 😥");
          console.log(error);
        });
      getTodo();
    },
    [getTodo]
  );

  const deleteTodo = useCallback(
    async (id: number | null) => {
      await api
        .delete(`todos/${id}.json`)
        .then((res) => {
          if (res?.status === 200)
            toast.success("Successfully deleted a todo entry 😀!");
        })
        .catch((error) => {
          toast.error("There seems to be an error while deleting the entry 😥");
          console.log(error);
        });

      getTodo();
    },
    [getTodo]
  );

  const updateTodo = useCallback(
    async (id: number, data: Todo) => {
      await api
        .put(`todos/${id}.json`, data)
        .then((res) => {
          if (res?.status === 200)
            toast.success("Successfully changed entry data 😀!");
        })
        .catch((error) => {
          toast.error(
            "There seems to be an error while changing entry data 😥"
          );
          console.log(error);
        });

      getTodo();
    },
    [getTodo]
  );

  return [todos, getTodo, addTodo, deleteTodo, updateTodo];
};
