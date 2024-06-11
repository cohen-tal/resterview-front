import React, { HTMLInputTypeAttribute, forwardRef } from "react";
import FormCircularIndex from "./FormCircularIndex";

export interface FormInputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  label?: string;
  accept?: string;
  multiple?: boolean;
  value?: string | readonly string[] | number | undefined;
  placeHolder?: string;
  error?: string;
  valid?: boolean;
  index?: number;
  isTextArea?: boolean; // New prop to determine if the input is a textarea
  onChange?: () => void;
  onSelect?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

function FormInput(
  {
    type,
    name,
    label,
    error,
    valid,
    index,
    accept,
    multiple = false,
    placeHolder,
    isTextArea = false,
    ...rest
  }: FormInputProps,
  ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>
) {
  return (
    <div className="relative w-full flex flex-col p-4">
      <div className="flex items-center gap-1">
        {index && <FormCircularIndex value={index} valid={valid} />}
        {isTextArea ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            placeholder={placeHolder}
            className={`p-2 border rounded-md focus:outline-blue-400 dark:focus:outline-cyan-200 w-full resize-none h-64
            ${
              valid === undefined
                ? "bg-slate-50/70"
                : valid
                ? "bg-green-500/40"
                : "bg-red-400/70"
            }`}
            {...rest}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            accept={accept}
            multiple={multiple}
            placeholder={placeHolder}
            className={`p-2 border rounded-md focus:outline-blue-400 dark:focus:outline-cyan-200 w-full 
            ${
              valid === undefined
                ? "bg-slate-50/70"
                : valid
                ? "bg-green-500/40"
                : "bg-red-400/70"
            }`}
            {...rest}
          />
        )}
      </div>
      {error && <p className="text-sm text-red-400 pl-12">{error}</p>}
    </div>
  );
}

export default forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormInputProps
>(FormInput);
