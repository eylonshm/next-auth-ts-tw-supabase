"use client";

import React from "react";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ onChange, ...rest }: InputProps) => {
  return (
    <input
      type="text"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-green-500"
      {...rest}
    />
  );
};
