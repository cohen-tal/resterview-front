import { HTMLInputTypeAttribute } from "react";
import { Control, Controller } from "react-hook-form";
import FormInput from "../forms/FormInput";

interface InputControllerProps {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  index?: number;
  control: Control<any>;
  isTextArea?: boolean;
}

export default function InputControllerWrapper({
  name,
  type,
  placeholder,
  index,
  control,
  isTextArea,
}: InputControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <FormInput
            {...field}
            type={type}
            placeHolder={placeholder}
            index={index}
            isTextArea={isTextArea}
            error={fieldState.error?.message}
            valid={
              fieldState.isDirty
                ? fieldState.invalid
                  ? false
                  : true
                : undefined
            }
          />
        );
      }}
    />
  );
}
