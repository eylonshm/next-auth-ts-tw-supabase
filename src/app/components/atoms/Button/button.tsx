import React from "react";

export interface ButtonProps {
  text?: string;
  children?: React.ReactNode | string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children || text}
    </button>
  );
};
