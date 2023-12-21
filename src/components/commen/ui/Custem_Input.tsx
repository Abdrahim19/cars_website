import React, { ChangeEvent } from "react";
import { FieldError, FieldErrorsImpl, Merge, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";

type InputProps = {
  name: string;
  type: 'text' | 'password';
  label?: string;
  value?: string | number;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  styles?: string;
  register?: (rules?: RegisterOptions) => UseFormRegisterReturn;
};

const Custom_Input: React.FC<InputProps> = (props) => {
  return ( 
    <div>
    <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">{props.label}</label>
    <input value={props.value}
          type={props.type}
          id={props.name}
          {...props.register}
          name={props.name}  className="mt-2.5 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
    {props.error && props.error && (
        <span className={`${props.error === "success" ? "text-[#2e69ff]" : "text-red-500"} font-medium flex items-center gap-2 tracking-wide text-sm mt-2 ml-1`}>
          <MdErrorOutline color={'#ff5555'} size={20} />
          {props.error as string}
        </span>
      )}
  </div>

  );
};

export default Custom_Input;