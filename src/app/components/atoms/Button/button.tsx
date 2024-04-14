"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode | string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  text,
  onClick,
  ...rest
}) => {
  const { pending: loading } = useFormStatus();
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      {...rest}
    >
      {loading ? "Loading..." : text || children}
    </button>
  );
};
