import { useCallback, useState } from "react";
import { Todo } from "../../components/Content/Content";
import { UseEditDataProps } from "./types";

export const useEditData = (handleAddChanged: () => void): UseEditDataProps => {
  const [editData, setEditData] = useState<Todo | null>();

  const resetEditData = useCallback(() => {
    setEditData(null);
  }, []);

  const changeEditData = useCallback(
    (data: Todo) => {
      handleAddChanged();
      setEditData(data);
    },
    [handleAddChanged]
  );

  return [editData, resetEditData, changeEditData];
};
