import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ onChange }: InputProps) => {
  return <input type="text" />;
};
