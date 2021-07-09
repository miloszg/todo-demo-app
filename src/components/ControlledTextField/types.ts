import { Control } from "react-hook-form";
import { Todo } from "../Content/Content";

type Variants = "outlined" | "filled" | "standard";

export interface ControlledTextFieldProps {
  control: Control<Todo>;
  label?: string;
  name: keyof Todo;
  required?: boolean;
  variant?: Variants;
  isMulti?: boolean;
  size?: "small" | "medium";
  placeholder?: string;
  type?: string;
}