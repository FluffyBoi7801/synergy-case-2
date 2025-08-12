import { FormValues } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/types.ts";
import { Control, Controller } from "react-hook-form";
import { FC, HTMLInputTypeAttribute } from "react";
import { TextField } from "@/shared/ui";

type Props = {
  name: keyof FormValues;
  control: Control<FormValues>;
  label?: string;
  type?: HTMLInputTypeAttribute;
};

export const ControlledTextField: FC<Props> = ({
  name,
  control,
  label,
  type,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          label={label}
          type={type}
          error={error?.message}
          {...field}
        />
      )}
    />
  );
};
