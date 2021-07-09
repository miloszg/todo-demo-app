import { useCallback, useState } from "react";
import { UseToggleProps } from "./types";

export const useToggleState = (initState?: boolean): UseToggleProps => {
  const [open, setOpen] = useState(initState || false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return [open, handleClick];
};
