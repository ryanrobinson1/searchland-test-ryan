import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button className={`bg-green-500 p-2 rounded mt-6 w-full text-white font-bold ${className ? className : ""}`} {...rest}>
      {children}
    </button>
  );
};
