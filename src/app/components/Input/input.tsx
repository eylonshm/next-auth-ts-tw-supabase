"use client";

import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ onChange, ...rest }: InputProps) => {
  return (
    <input
      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
      type="text"
      onChange={onChange}
      {...rest}
    />
  );
};
