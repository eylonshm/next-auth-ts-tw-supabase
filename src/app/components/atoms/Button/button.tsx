"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode | string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  text,
  onClick,
  loading: loadingProp,
  disabled: disabledProp,
  ...rest
}) => {
  const { pending: formLoading } = useFormStatus();
  const isLoading = loadingProp || formLoading;
  const isDisabled = disabledProp || isLoading;
  return (
    <button
      onClick={() => {
        if (isDisabled) return;
        onClick?.();
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      disabled={isDisabled}
      {...rest}
    >
      {isLoading ? "Loading..." : text || children}
    </button>
  );
};
