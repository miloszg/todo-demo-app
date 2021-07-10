import React from "react";
import { Controller } from "react-hook-form";
import { useIntl } from "react-intl";
import { ControlledTextFieldProps } from "./types";
import { TextFieldComponent } from "./ControlledTextField.css";

const ControllerTextField = ({
  control,
  label,
  name,
  required,
  variant,
  isMulti,
  size,
  placeholder,
  type,
  helperText,
  maxLength,
}: ControlledTextFieldProps) => {
  const intl = useIntl();

  return (
    <Controller
      name={name}
      rules={{
        required,
        maxLength: maxLength ?? 1000,
        validate: (value: any) => !!value,
      }}
      control={control}
      render={({ field, ...props }) => (
        <TextFieldComponent
          fullWidth
          type={type}
          color="primary"
          variant={variant}
          multiline={isMulti}
          rows={isMulti ? 3 : 1}
          rowsMax={isMulti ? 3 : 1}
          size={size}
          placeholder={placeholder}
          label={label && intl.formatMessage({ id: label })}
          helperText={helperText}
          {...field}
          {...props}
        />
      )}
    />
  );
};

export default ControllerTextField;
